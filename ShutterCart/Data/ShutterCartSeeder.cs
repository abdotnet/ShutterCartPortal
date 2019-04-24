using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using shuttercart.Core.Models;
using shuttercart.Core.Services;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data
{


  public static class ShutterCartSeeder
  {
    private static ShutterCartContext _context;


    public static void Seed(ShutterCartContext context)
    {
      _context = context;
      _context.Database.EnsureCreated();
      string password = "@Password1";

      var userm = new UserModel()
      {
        FirstName = "Demo-User",
        LastName = "Account",
        MiddleName="user",
        EmailAddress = "demo-account@gmail.com",
        Password = password
      };
      

      string salt = Guid.NewGuid().ToString();

      var user = new User()
      {
        FirstName = "Demo",
        LastName = "Admin",
        EmailAddress = "demo@gmail.com",
        Password = EncryptPassword(password, salt),
        Salt = salt,
        Address = "123",
        ApplicationCode = Guid.NewGuid().ToString(),
        Channel = RegistrationChannel.IsWeb,
        CreatedBy = 1,
        DateOfBirth = DateTime.Now,
        Gender = 1,
        CreatedDate = DateTime.Now,
        LastLoginDate = DateTime.Now,
        MiddleName = "G",
        Mobile = "08130230146",
        Title = "Mr",

      };
      user.UserName = $"{user.FirstName}.{user.LastName}{new Random().Next(1000, 24344)}@shuttercart.com";

      _context.Users.Add(user);

      _context.SaveChanges();

      // Create Role

      _context.Role.Add(new Role()
      {
        Name = "Administration",
        CreatedDate = DateTime.Now,
        CreatedBy = 1
      });
      _context.Role.Add(new Role()
      {
        Name = "Users",
        CreatedDate = DateTime.Now,
        CreatedBy = 1
      });
      _context.SaveChanges();

      _context.UserRole.Add(new UserRole()
      {
        RoleId = 1,
        UserId = 1,
        CreatedDate = DateTime.Now,
        CreatedBy = 1
      });
      _context.SaveChanges();

    }

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
  }

  public class ShutterCartSeeder2
  {
    private ShutterCartContext _context;
    private IHostingEnvironment _environment;
    private UserManager<UserModel> _userManager;

    public ShutterCartSeeder2(ShutterCartContext ctx, IHostingEnvironment environment, UserManager<UserModel> userManager)
    {
      _context = ctx;
      _environment = environment;
      _userManager = userManager;
    }

    public async Task Seed()
    {
      _context.Database.EnsureCreated();

      // Create User ..
      var user = await _userManager.FindByEmailAsync("abudotnet@gmail.com");

      if (user == null)
      {

        user = new UserModel()
        {
          FirstName = "omolaja",
          LastName = "Ganiu",
          EmailAddress = "abudotnet@gmail.com",
          Password = "@Password1"
        };

        var result = await _userManager.CreateAsync(user, user.Password);

        if (result != IdentityResult.Success)
        {
          throw new InvalidOperationException("Failed to create default user");
        }
      }
      _context.SaveChanges();
      // Create Role

      _context.Role.Add(new Role()
      {
        Name = "Administration",
        CreatedDate = DateTime.Now,
        CreatedBy = 1
      });
      _context.Role.Add(new Role()
      {
        Name = "Users",
        CreatedDate = DateTime.Now,
        CreatedBy = 1
      });
      _context.SaveChanges();

      _context.UserRole.Add(new UserRole()
      {
        RoleId = 1,
        UserId = 1,
        CreatedDate = DateTime.Now,
        CreatedBy = 1
      });
      await _context.SaveChangesAsync();

    }

    public async Task Seed2()
    {
      _context.Database.EnsureCreated();

      var user = new UserModel()
      {
        FirstName = "omolaja",
        LastName = "Ganiu",
        EmailAddress = "abudotnet@gmail.com",
        Password = "@Password1"
      };
      string password = "@Password1";

      string salt = Guid.NewGuid().ToString();

      _context.Users.Add(new User()
      {
        FirstName = "omolaja",
        LastName = "Ganiu",
        EmailAddress = "abudotnet@gmail.com",
        Password = password, //EncryptPassword(password, salt),
        Salt = salt,
        Address = "123",
        ApplicationCode = Guid.NewGuid().ToString(),
        Channel = RegistrationChannel.IsWeb,
        CreatedBy = 1,
        DateOfBirth = DateTime.Now,
        Gender = 1,
        CreatedDate = DateTime.Now,
        LastLoginDate = DateTime.Now,
        MiddleName = "G",
        Mobile = "08130230146",
        Title = "Mr",
      });

      await _context.SaveChangesAsync();

      // Create Role

      _context.Role.Add(new Role()
      {
        Name = "Administration",
        CreatedDate = DateTime.Now,
        CreatedBy = 1
      });
      _context.Role.Add(new Role()
      {
        Name = "Users",
        CreatedDate = DateTime.Now,
        CreatedBy = 1
      });
      _context.SaveChanges();

      _context.UserRole.Add(new UserRole()
      {
        RoleId = 1,
        UserId = 1,
        CreatedDate = DateTime.Now,
        CreatedBy = 1
      });
      _context.SaveChanges();

    }
  }
}

