using System.ComponentModel.DataAnnotations;

namespace shuttercart.Data.Entity
{
  public   class SocialLogin
  {
    [Key]
    public int SocialLoginId { get; set; }
    public string Provider { get; set; }
    public string Key { get; set; }
    public string Name { get; set; }
    public string UserId { get; set; }
    public User User { get; set; }
  }
}
