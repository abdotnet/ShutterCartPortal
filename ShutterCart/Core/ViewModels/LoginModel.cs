using shuttercart.Core.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.ViewModels
{
  public class LoginModel
  {
    [Required]
    public string UserName { get; set; }
    [Required]
    public string Password { get; set; }
    public bool RememberMe { get; set; }
  }

  public class Token
  {
    public string token { get; set; }
    public DateTime expiration { get; set; }
    public UserModel user { get; set; }
  }
}
