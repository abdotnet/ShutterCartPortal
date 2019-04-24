using shuttercart.Core.Models;
using shuttercart.Data.Entity;
using shuttercart.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using shuttercart.Core.Infrastructures.Extension;


namespace shuttercart.Core.Infrastructures.Helper
{
  public static class Mapper
  {
    public static UserModel MapUser(User user)
    {
      var model = new UserModel();
      model.Assign(user);
      model.IsCancelled = user.IsCancelled;
      model.MiddleName = user.MiddleName;

      model.Password = string.Empty;
      return model;
    }
    public static UserModel MapUser(User user, Role role)
    {
      var model = new UserModel();

      model.Assign(user);

      model.FirstName = user.FirstName.ToUpper();
      model.LastName = user.LastName.ToUpper();
      model.MiddleName = user.MiddleName;

      model.IsCancelled = user.IsCancelled;
      model.Role = role.Name;
      model.Password = string.Empty;
      return model;
    }

    public static User MapUser(UserModel model)
    {
      var user = new User();
      user.Assign(model);
      user.IsCancelled = model.IsCancelled;
      model.Password = string.Empty;
      return user;
    }

    public static SocialLogin MapSocialLogin(SocialLoginModel model)
    {
      var socialLogin = new SocialLogin();
      socialLogin.Assign(model);
      return socialLogin;
    }

    public static SocialLoginModel MapSocialLogin(SocialLogin socialLogin)
    {
      var model = new SocialLoginModel();
      model.Assign(socialLogin);
      return model;
    }
  }
}
