using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Infrastructures;
using shuttercart.Core.Infrastructures.Helper;
using shuttercart.Core.Models;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace shuttercart.Data.Repository
{
  public class UserRepository : IUserRepository
  {
    private ShutterCartContext _db;
    private readonly IMapper _mapper;
    private readonly ILogger<UserRepository> _logger;
    private readonly IConfiguration config;

    public UserRepository(ShutterCartContext db, IMapper mapper, ILogger<UserRepository> logger, IConfiguration config)
    {
      _db = db;
      _mapper = mapper;
      _logger = logger;
      this.config = config;
    }

    public async Task AddClaims(string userId, ClaimModel[] models)
    {
      long u = long.Parse(userId);
      var claimQuery = from userClaim in _db.Set<Claim>()
                       where userClaim.UserId == u
                       select userClaim;

      var userClaims = await claimQuery.ToListAsync();

      //Get Existing Claims
      var existingQueries = from claim in userClaims
                            join model in models
                            on claim.Type equals model.Type
                            select new { claim, model };

      //Update Existing Claims
      foreach (var record in existingQueries)
      {
        record.claim.Value = record.model.Value;
      }

      //Add new Claims
      var newClaims = models.Except(existingQueries.Select(r => r.model));
      foreach (var newClaim in newClaims)
      {
        _db.Add(new Claim
        {
          UserId = long.Parse(userId),
          Type = newClaim.Type,
          Value = newClaim.Value
        });
      }

      _db.SaveChanges();
    }

    public async Task AddSocialLogin(string userId, SocialLoginModel model)
    {
      var socialLogin = Core.Infrastructures.Helper.Mapper.MapSocialLogin(model);
      _db.Set<SocialLogin>().Add(socialLogin);
      await _db.SaveChangesAsync();
      model.SocialLoginId = socialLogin.SocialLoginId;
    }

    public async Task ChangeStatus(string userId, UserStatus status)
    {
      var user = await _db.FindAsync<User>(userId);
      user.UserStatus = status;
      await _db.SaveChangesAsync();
    }

    public async Task<UserModel> CreateUser(UserModel model)
    {
      var entity = Core.Infrastructures.Helper.Mapper.MapUser(model);
      _db.Set<User>().Add(entity);
      await _db.SaveChangesAsync();
      model.UserId = entity.UserId;
      return model;
    }

    public async Task DeleteUser(UserModel model)
    {
      var user = _db.Set<User>().Find(model.UserId);
      if (user != null)
      {
        _db.Set<User>().Remove(user);
      }
      await _db.SaveChangesAsync();
    }

    public async Task<UserModel> FindUserBySocialLogin(string loginProvider, string providerKey)
    {
      var query = from socialLogins in _db.Set<SocialLogin>().Include(s => s.User)
                  where socialLogins.Provider == loginProvider
                  where socialLogins.Key == providerKey
                  select socialLogins.User;

      var user = await query.FirstOrDefaultAsync();
      if (user == null) return null;
      return Core.Infrastructures.Helper.Mapper.MapUser(user);
    }

    public async Task<UserModel[]> FindUsersFromClaim(string type, string value)
    {
      var query = from claims in _db.Set<Claim>()
                  where claims.Type == type
                  where claims.Value == value
                  select claims.User;
      var users = await query.ToListAsync();
      return users.Select(Core.Infrastructures.Helper.Mapper.MapUser).ToArray();
    }

    public async Task<string> GetPasswordHash(string userId)
    {
      var _u = long.Parse(userId);
      var query = from users in _db.Set<User>()
                  where users.UserId == _u
                  select users.Salt;

      return await query.FirstOrDefaultAsync();
    }

    public async Task<SocialLoginModel> GetSocialLogin(string userId, string loginProvider)
    {
      var query = from socialLogins in _db.Set<SocialLogin>()
                  where socialLogins.UserId == userId
                  where socialLogins.Provider == loginProvider
                  select socialLogins;

      var login = await query.FirstOrDefaultAsync();
      return Core.Infrastructures.Helper.Mapper.MapSocialLogin(login);
    }

    public async Task<SocialLoginModel[]> GetSocialLogins(string userId)
    {
      var query = from socialLogins in _db.Set<SocialLogin>()
                  where socialLogins.UserId == userId
                  select socialLogins;

      var logins = await query.ToListAsync();
      return logins.Select(Core.Infrastructures.Helper.Mapper.MapSocialLogin).ToArray();
    }

    public async Task<UserModel> GetUserByEmail(string email)
    {
      var query = from users in _db.Set<User>()
                  where users.EmailAddress == email
                  select users;

      var user = await query.FirstOrDefaultAsync();

      if (user == null) return null;
      return Core.Infrastructures.Helper.Mapper.MapUser(user);
    }

    public async Task<UserModel> GetUserById(string userId)
    {
      long _u = long.Parse(userId);

      var query = from users in _db.Set<User>()
                  join roleUser in _db.Set<UserRole>() on users.UserId equals roleUser.UserId
                  join role in _db.Set<Role>() on roleUser.RoleId equals role.RoleId
                  where users.UserId == _u
                  select new { users, role };

      var user = await query.Select(c => c.users).FirstOrDefaultAsync();
      var _role = await query.Select(c => c.role).FirstOrDefaultAsync();

      if (user == null) return null;
      return Core.Infrastructures.Helper.Mapper.MapUser(user, _role);
    }

    public async Task RemoveClaims(string userId, string[] claimTypes)
    {
      long u = long.Parse(userId);

      var query = from claim in _db.Set<Claim>()
                  where claim.UserId == u
                  where claimTypes.Contains(claim.Type)
                  select claim;
      var claims = await query.ToListAsync();
      _db.RemoveRange(claims);
      await _db.SaveChangesAsync();
    }

    public async Task RemoveSocialLogin(string userId, string loginProvider, string providerKey)
    {
      var query = from socialLogins in _db.Set<SocialLogin>()
                  where socialLogins.UserId.ToString() == userId
                  where socialLogins.Provider == loginProvider
                  where socialLogins.Key == providerKey
                  select socialLogins;

      var socialLogin = await query.FirstOrDefaultAsync();
      if (socialLogin == null) throw new Exception("Social Login not Found");
      _db.Set<SocialLogin>().Remove(socialLogin);
      await _db.SaveChangesAsync();
    }

    public async Task SetClaimValue(string userId, string claimType, string claimValue)
    {
      var query = from users in _db.Set<User>()
                  where users.UserId.ToString() == userId
                  from claims in users.Claims
                  where claims.Type == claimType
                  select claims;

      var claim = await query.FirstOrDefaultAsync();

      claim.Value = claimValue;

      await _db.SaveChangesAsync();
    }

    public async Task<string> SetPasswordHash(string userId, string passwordHash)
    {
      var user = await _db.Set<User>().FindAsync(userId);
      if (user == null) throw new Exception("User Not Found");
      user.Salt = passwordHash;
      await _db.SaveChangesAsync();
      return passwordHash;
    }

    public async Task<UserModel> UpdateUser(UserModel model)
    {
      var user = await _db.Set<User>().FindAsync(model.UserId);
      if (user == null) throw new Exception("User Not Found");
      user.FirstName = model.FirstName;
      user.LastName = model.LastName;
      user.Mobile = model.Mobile;
      user.DateOfBirth = model.DateOfBirth;
      user.Gender = model.Gender;
      await _db.SaveChangesAsync();
      return Core.Infrastructures.Helper.Mapper.MapUser(user);
    }

    public async Task<long> GetUserId(string userName)
    {
      var query = from user in _db.Set<User>()
                  where user.UserName == userName
                  where user.EmailAddress == userName
                  select user;

      var _user = await query.FirstOrDefaultAsync();

      return _user.UserId;

    }

    /// <summary>
    ///  Validate User ...
    /// </summary>
    /// <param name="username"></param>
    /// <param name="password"></param>
    /// <returns></returns>
    public Operation<UserModel> ValidateUser(string username, string password)
    => Operation.Create(() =>
    {
      var query = from user in _db.Set<User>()
                  join userRole in _db.Set<UserRole>() on user.UserId equals userRole.UserId
                  join role in _db.Set<Role>() on userRole.RoleId equals role.RoleId
                  where user.EmailAddress == username || user.UserName == username || user.Mobile == username
                  select new { user, role };

      var _user = query.Select(c => c.user).FirstOrDefault();
      var _role = query.Select(c => c.role).FirstOrDefault();

      if (_user == null)
        throw new Exception("Invalid Credentials");

      var encryptedPwd = EncryptPassword(password, _user.Salt);
      UserModel userModel = null;

      if (encryptedPwd == _user.Password)
      {

        userModel = Core.Infrastructures.Helper.Mapper.MapUser(_user, _role); //_mapper.Map<User, UserModel>(user);//  new UserModel(user);
        _user.LastLoginDate = DateTime.Now;
        _db.Update<User>(_user);
        _db.SaveChanges();
        return userModel;
      }
      else throw new Exception("Invalid Credentials");
    });

    public static string EncryptPassword(string password, string salt = "")
    {
      string text = salt + password;
      var UE = new UTF8Encoding();
      byte[] hashValue;
      byte[] message = UE.GetBytes(text);

      SHA512Managed hashString = new SHA512Managed();
      string hex = "";

      hashValue = hashString.ComputeHash(message);
      foreach (byte x in hashValue)
      {
        hex += String.Format("{0:x2}", x);
      }
      return hex;
    }
    private static Operation<string> GenerateUniquePassword() => Operation.Create(() =>
    {
      using (var rng = new RNGCryptoServiceProvider())
      {
        var i1 = Math.Abs(RandomInt(rng));
        return $"TMP-{DateTime.Now.ToString("yyddMM")}-{i1.ToString("X")}";
      }
    });

    private static uint RandomInt(RandomNumberGenerator rng)
    {
      var intByte = new byte[4];
      rng.GetBytes(intByte);
      return BitConverter.ToUInt32(intByte, 0);
    }

    public Task<Operation> AddOrUpdateRegister(UserModel model)
    {

      return Operation.Run(() =>
      {

        if (model == null)
          throw new Exception("User information cannot be empty");

        if (string.IsNullOrEmpty(model.Password))
          throw new Exception("Password cannot be empty");

        if (string.IsNullOrEmpty(model.Role))
          throw new Exception("Role cannot be empty");

        model.Validate();

        var user = _db.Set<User>().FirstOrDefault(c => c.EmailAddress == model.EmailAddress);
        if (user != null)
          throw new Exception("Email already exist");

        user = _db.Set<User>().FirstOrDefault(c => c.UserId == model.UserId);

        string salt = Guid.NewGuid().ToString();

        var role = _db.Set<Role>().FirstOrDefault(c => c.Name == model.Role);
        if (role == null)
          throw new Exception("Role not found ");

        if (user == null)
        {
          user = new User()
          {
            EmailAddress = model.EmailAddress,
            FirstName = model.FirstName,
            LastName = model.LastName,
            Mobile = model.Mobile,
            Gender = model.Gender,
            Password = EncryptPassword(model.Password, salt),
            Title = "Mr",
            DateOfBirth = DateTime.Now,
            ApplicationUserId = 1,
            CreatedDate = DateTime.Now,
            LastLoginDate = DateTime.Now,
            Salt = salt,
            UserName = model.Username,
            IsPhoneConfirmed = true,
            MiddleName = model.MiddleName
          };
          _db.Add<User>(user);
          _db.SaveChanges();


          _db.Add<UserRole>(new UserRole()
          {
            RoleId = role.RoleId,
            UserId = user.UserId
          });
          _db.SaveChanges();

        }
        else
        {
          user.EmailAddress = model.EmailAddress;
          user.FirstName = model.FirstName;
          user.LastLoginDate = model.LastLoginDate;
          user.LastName = model.LastName;
          user.Gender = model.Gender;
          user.Mobile = model.Mobile;
          user.MiddleName = model.MiddleName;
          _db.Update<User>(user);
          _db.SaveChanges();
        }

        return Task.CompletedTask;
      });

    }


    public Task<Operation> UpdateProfile(UserModel model)
    {

      return Operation.Run(() =>
      {

        if (model == null)
          throw new Exception("User information cannot be empty");

        if (model.UserId <= 0)
          throw new Exception("User information cannot be empty");

        model.Validate();

        var user = _db.Set<User>().FirstOrDefault(c => c.UserId == model.UserId);

        string salt = Guid.NewGuid().ToString();

        user.FirstName = model.FirstName;
        user.LastName = model.LastName;
        user.MiddleName = model.MiddleName;

        user.Gender = model.Gender;
        user.Mobile = model.Mobile;
        _db.Update<User>(user);

        var role = _db.Set<Role>().FirstOrDefault(c => c.Name == model.Role);

        if (role != null)
        {
          _db.Add<UserRole>(new UserRole()
          {
            RoleId = role.RoleId,
            UserId = user.UserId
          });
        }

        _db.SaveChanges();

        return Task.CompletedTask;
      });

    }

    public Task<Operation> ChangePassword(PasswordChangeModel model)
    {
      return Operation.Run(() =>
      {
        if (model == null)
          throw new Exception("Password change cannot be null");


        model.Validate();

        var user = _db.Set<User>().SingleOrDefault(c => c.UserId == model.UserId);

        if (user == null)
          throw new Exception("User not found ");

        bool flag = false;

        flag = EncryptPassword(model.OldPassword, user.Salt) == user.Password;
        if (flag)
        {
          user.Password = EncryptPassword(model.NewPassword, user.Salt);
          _db.Update<User>(user);
          _db.SaveChanges();
          return Task.CompletedTask;

        }
        else
          throw new Exception("Please enter your old password correctly");
      });
    }
    public Operation<UserModel[]> GetUsers()
    {
      return Operation.Create(() =>
      {

        var query = _db.Users.Where(c => !c.IsCancelled).ToList();

        var _queryUsers = new List<UserModel>();

        query.ForEach(c =>
        {
          _queryUsers.Add(new UserModel()
          {
            Address = c.Address,
            FirstName = c.FirstName,
            LastName = c.LastName,
            DateOfBirth = c.DateOfBirth,
            Channel = c.Channel,
            EmailAddress = c.EmailAddress,
            Gender = c.Gender,
            Mobile = c.Mobile,
            MiddleName = c.MiddleName,
            UserId = c.UserId,
            Title = c.Title,
            UserName = c.UserName,
          });
        });
        return _queryUsers.ToArray();
      });
    }
    public Operation<Pagination<UserModel>> GetUsers(string search, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get user method ");

        var query = _db.Users.Where(s => !s.IsCancelled).ToList();

        if (!string.IsNullOrEmpty(search))
          query = query.Where(c => c.UserName.Contains(search)).ToList();

        long totalCount = query.LongCount();

        if (pageIndex > 0) query = query.Skip(pageSize).Take(pageIndex * pageSize).ToList();

        var _query = new List<UserModel>();
        query.ForEach(c =>
        {
          _query.Add(new UserModel()
          {
            Address = c.Address,
            Channel = c.Channel,
            DateOfBirth = c.DateOfBirth,
            EmailAddress = c.EmailAddress,
            FirstName = c.FirstName,
            Gender = c.Gender,
            LastName = c.LastName,
            MiddleName = c.MiddleName,
            Title = c.Title,
            UserName = c.UserName,
            IsCancelled = c.IsCancelled,
            UserStatus = c.UserStatus,
            UserId = c.UserId,
            Status = c.Status,
            Mobile = c.Mobile
          });
        });
        // var _query = _mapper.Map<IEnumerable<User>, IEnumerable<UserModel>>(query).ToArray();

        return new Pagination<UserModel>(_query.ToArray(), totalCount, pageSize, pageIndex);

      });
    }

    public Operation ForgotPasswordCode(string email)
    {
      return Operation.Create(() =>
      {

        if (string.IsNullOrEmpty(email))
          throw new Exception("Email address not found ");

        const string emailPattern = @"^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";

        if (!Regex.IsMatch(email, emailPattern))
          throw new Exception("Email format is wrong");

        var user = _db.Set<User>().FirstOrDefault(c => c.EmailAddress.Trim() == email.Trim());

        if (user == null)
          throw new Exception("Email address does not exist");

        string resetcode = Guid.NewGuid().ToString().Substring(0, 6).ToUpper();

        user.PasswordResetCode = resetcode;
        var expire = DateTime.Now.AddMinutes(double.Parse(config["System:passwordResetCodeMinute"]));

        user.PasswordResetDate = expire;

        _db.Users.Update(user);
        _db.SaveChanges();

        // Send email address
        string body = $@"*DO NOT DISCLOSE* A reset code has been sent to you by NovaCart {resetcode} as your one time code,Expires {expire}";

        SendEmails(body, toEmail: email, subject: "NovaCart password reset code").Throw();

      });
    }


    public Operation PasswordResetUpdate(RecoverPassword model)
    {
      return Operation.Create(() =>
      {

        if (model == null) throw new Exception("Password recover cannot be empty");

        model.Validate();

        var user = _db.Users.FirstOrDefault(c => c.PasswordResetCode == model.Code);

        if (user == null) throw new Exception("User code does not exist");
        double code_in_minute = double.Parse(config["System:passwordResetCodeMinute"]);

        if (user.PasswordResetDate.Subtract(DateTime.Now).Minutes > code_in_minute) throw new Exception("Password reset code has expires, please request for a new reset code");

        if (model.Password != model.ConfirmPassword) throw new Exception("Password must be equal confirm password");

        user.Password = EncryptPassword(model.Password, user.Salt);
        user.ModifiedDate = DateTime.UtcNow;
        _db.Users.Update(user);

        _db.SaveChanges();
      });
    }

    /// <summary>
    /// Send sms module 
    /// </summary>
    /// <returns></returns>
    private Operation SendEmails(string body, string toEmail, string subject = "test")
    {
      return Operation.Create(() =>
      {
        string username = config["EmailSender:username"];
        string password = config["EmailSender:password"];

        string host = config["EmailSender:Host"];
        string port = config["EmailSender:Port"];

        var fromAddress = new MailAddress("no-reply@novacart.ng", "no-reply@novacart.ng");
        var toAddress = new MailAddress(toEmail, "no-reply@novacart.ng");

        //const string fromPassword = "45678";

        var smtp = new SmtpClient
        {
          Host = host,
          Port = int.Parse(port),
          EnableSsl = true,
          DeliveryMethod = SmtpDeliveryMethod.Network,
          Credentials = new NetworkCredential(username, password),
          Timeout = 20000,
        };

        using (var msg = new MailMessage(fromAddress, toAddress) { Subject = subject, Body = body })
        {
          smtp.Send(message: msg);
        }

      });
    }
  }
}
