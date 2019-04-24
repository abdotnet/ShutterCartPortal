using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class SocialLoginModel : Model
  {
    public string Name { get; internal set; }
    public string Key { get; internal set; }
    public string Provider { get; internal set; }
    public int SocialLoginId { get; internal set; }
  }

  public class RecoverPassword  : Model
  {
    [Required]
    public string Code { get; set; }
    [Required]
    public string Password { get; set; }
    [Required]
    public string ConfirmPassword { get; set; }
  }
}
