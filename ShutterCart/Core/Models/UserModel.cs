using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  //[ModelBinder(typeof(UserModelBinder))]
  public class UserModel : Model
  {
    public UserModel()
    {
      //UserRoles = new HashSet<UserRole>();
    }

    public string Title { get; set; }
    public long UserId { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    public string MiddleName { get; set; }
    [Required]
    public string Mobile { get; set; }
    [Required]
    public int Gender { get; set; }
    public string Address { get; set; }
    [Required]
    [MaxLength(450)]
    public string EmailAddress { get; set; }
    public string Password { get; set; }
    public string Salt { get; set; }
    public bool IsEmailConfirmed { get; set; }
    public bool IsPhoneConfirmed { get; set; }
    public bool IsLocked { get; set; }
    public string Username => $"{FirstName}.{LastName}{new Random().Next(1000, 24344)}@shuttercart.com";

    public string UserName { get; internal set; }

    public string FullName => $"{FirstName} {LastName}";
    public virtual ICollection<UserRole> UserRoles { get; set; }
    public DateTime LastLoginDate { get; set; } = DateTime.Now;
    public RegistrationChannel Channel { get; set; }
    public string ApplicationCode { get; set; }
    public DateTime DateOfBirth { get; internal set; }
    public UserStatus UserStatus { get; set; }
    public string Role { get; set; } = "User";
  }

  public class UserModel1
  {
    public string Title { get; set; }
    public long UserId { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    public string MiddleName { get; set; }
    [Required]
    public string Mobile { get; set; }
    [Required]
    public string Gender { get; set; }
    //[Required]
    public string EmailAddress { get; set; }
    public string Password { get; set; }
    public string Role { get; set; }
    public string Address { get; set; }
  }



  public class PasswordChangeModel : Model
  {
    [Required]
    public long UserId { get; set; }
    [Required]
    public string OldPassword { get; set; }
    [Required]
    public string NewPassword { get; set; }
  }
  public class UserModelBinder : IModelBinder
  {
    public Task BindModelAsync(ModelBindingContext bindingContext)
    {


      if (bindingContext.ModelType != typeof(UserModel))
      {
        return Task.CompletedTask;
      }

      ValueProviderResult val = bindingContext.ValueProvider.GetValue("FirstName");
      if (val == null)
      {
        return Task.CompletedTask;
      }
      //string key = val.RawValue as string;
      //if (key == null)
      //{

      //}
      var fName = bindingContext.ActionContext.HttpContext.Request.Query["FirstName"].ToString();

      UserModel userModel = new UserModel()
      {
        FirstName = fName
      };
      bindingContext.Result = ModelBindingResult.Success(userModel);
      return Task.CompletedTask;

    }
  }

  public class UserModelBinderProvider : IModelBinderProvider
  {
    public IModelBinder GetBinder(ModelBinderProviderContext context)
    {
      if (context.Metadata.ModelType == typeof(UserModel))
        return new UserModelBinder();

      return null;
    }
  }
  public class UserRoleModel : Model
  {
    public long UserRoleId { get; set; }
    public long RoleId { get; set; }
    public long UserId { get; set; }

    public virtual User User { get; set; }
    public virtual Role Role { get; set; }

  }

  public class RoleModel : Model
  {
    public long RoleId { get; set; }
    public string Name { get; set; }
  }

  public class UserPointEarnedModel
  {
    public string LastName { get; internal set; }
    public string FirstName { get; internal set; }
    public string Mobile { get; internal set; }
    public long Point { get; internal set; }
    public PointChannel Channel { get; internal set; }
    public DateTime CreatedDate { get; internal set; }
    public decimal TotalAmount { get; set; }
  }
}
