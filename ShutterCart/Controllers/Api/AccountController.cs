using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using shuttercart.Core.Services;
using shuttercart.Core.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using shuttercart.Core.ViewModels;
using shuttercart.Data.Repository;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using System.ComponentModel.DataAnnotations;

namespace shuttercart.Controllers.Api
{
  [Route("api/[controller]")]
  public class AccountController : ApiController
  {

    private readonly ILogger<AccountController> _logger;
    private readonly SignInManager<UserModel> _signInManager;
    private readonly UserManager<UserModel> _userManager;
    private readonly IConfiguration _config;
    private readonly IUserRepository _repo;
    private IMapper _mapper;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="logger"></param>
    /// <param name="signInManager"></param>
    /// <param name="userManager"></param>
    /// <param name="config"></param>
    /// <param name="repo"></param>
    /// <param name="mapper"></param>
    public AccountController(ILogger<AccountController> logger, SignInManager<UserModel> signInManager,
            UserManager<UserModel> userManager, IConfiguration config, IUserRepository repo, IMapper mapper)
    {
      _logger = logger;
      _signInManager = signInManager;
      _userManager = userManager;
      _config = config;
      _repo = repo;
      _mapper = mapper;
    }

    #region Account module Api's

    [HttpPost("register")]
    [AllowAnonymous]
    public async Task<IActionResult> Register([FromBody] UserModel1 model1)
    {

      var model = new UserModel()
      {
        FirstName = model1.FirstName,
        LastName = model1.LastName,
        MiddleName = model1.MiddleName,
        Role = model1.Role,
        Gender = !string.IsNullOrEmpty(model1.Gender) && model1.Gender.ToLower() == "male" ? 1 : 2,
        Password = model1.Password,
        DateOfBirth = DateTime.Now,
        Salt = Guid.NewGuid().ToString(),
        EmailAddress = model1.EmailAddress,
        Address = model1.Address,
        Mobile = model1.Mobile,
        Title = model1.Title,
        UserId = model1.UserId
      };

      var register = await _repo.AddOrUpdateRegister(model);

      if (register.Succeeded)
        return Ok(register);
      else
        return BadRequest(register);
    }

    [HttpGet("user/{id}")]
    public async Task<IActionResult> GetUser(long id)
    {
      var user = await _userManager.FindByIdAsync(id.ToString());

      var op = Operation.Create<UserModel>(() =>
      {
        return user;
      });
      return Ok(op);
    }

    [HttpPut("update-profile")]
    public async Task<IActionResult> UpdateProfile([FromBody]UserModel1 model1)
    {

      var register = await _repo.UpdateProfile(new UserModel()
      {
        FirstName = model1.FirstName,
        LastName = model1.LastName,
        Role = model1.Role,
        Gender = !string.IsNullOrEmpty(model1.Gender) && model1.Gender.ToLower() == "male" ? 1 : 2,
        DateOfBirth = DateTime.Now,
        EmailAddress = model1.EmailAddress,
        Address = model1.Address,
        Mobile = model1.Mobile,
        Title = model1.Title,
        UserId = model1.UserId,
        MiddleName = model1.MiddleName
      });

      if (register.Succeeded)
        return Ok(register);
      else
        return BadRequest(register);
    }

    [HttpPut("change-password")]
    public async Task<IActionResult> ChangeProfile([FromBody]PasswordChangeModel model)
    {

      var result = await _repo.ChangePassword(model);

      if (result.Succeeded)
        return Ok(result);
      else
        return BadRequest(result);
    }

    [HttpDelete("userId")]
    public IActionResult DeleteUser(int userId)
    {
      var op = Operation.Run(async () =>
      {
        await _repo.DeleteUser(new UserModel() { UserId = userId });

      });

      return Ok(op);
    }

    [HttpGet("{PageIndex}/user/{PageSize}")]
    public IActionResult GetPageUser(SearchModel model)
    {
      var op = _repo.GetUsers(model.Search, model.PageIndex, model.PageSize);

      return Ok(op);
    }
    [HttpGet("users")]
    public IActionResult GetUsers()
    {
      var op = _repo.GetUsers();
      return Ok(op);
    }

    /// <summary>
    /// Forget password ..
    /// </summary>
    /// <param name="email"></param>
    /// <returns></returns>
    [HttpGet("forgot-password/{email}")]
    [AllowAnonymous]
    public IActionResult ForgetPassword([Required]string email)
    {
      var op = _repo.ForgotPasswordCode(email);

      return Ok(op);
    }

    /// <summary>
    /// Update password reset ..
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost("update-password")]
    public IActionResult UpdatePassword([FromBody]RecoverPassword model)
    {
      var op = _repo.PasswordResetUpdate(model);

      return Ok(op);

    }

    #endregion

    #region token
    [HttpPost("token")]
    [AllowAnonymous]
    public async Task<IActionResult> CreateToken([FromBody]LoginModel model)
    {
      if (ModelState.IsValid)
      {
        var user = await _userManager.FindByNameAsync(model.UserName);

        if (user != null)
        {
          var result = _repo.ValidateUser(model.UserName, model.Password); //await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);


          if (result.Succeeded)
          {
            var claims = new[]
            {
                            new Claim(JwtRegisteredClaimNames.Sub,user.EmailAddress),
                            new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
                            new Claim(JwtRegisteredClaimNames.UniqueName,user.EmailAddress),
                            new Claim("UserId",user.UserId.ToString()),
                            new Claim("FirstName",user.FirstName),
                            new Claim("LastName",user.LastName),
                             new Claim("role","Administrator"),
                            new Claim("UserStatus",user.UserStatus.ToString()),
                             new Claim("LastLoginDate",user.LastLoginDate.ToString()),
                        };


            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));
            // new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);


            var token = new JwtSecurityToken(
                _config["Tokens:Issuer"],
                _config["Tokens:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(1000000),
                signingCredentials: creds
                );

            var op = Operation.Create<Token>(() =>
            {
              var _token = new Token()
              {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo,
                user = user
              };

              return _token;
            });

            _logger.LogInformation($"Error message {op.Result.token} & {op.Result.expiration}");
            //, userId = user.UserId.ToString()

            // return Created("", op);
            return Ok(op);
          }
        }

      }
      return BadRequest();

    }
    #endregion
  }
}
