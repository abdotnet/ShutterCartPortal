using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace shuttercart.Data.Entity
{


  public class User : BaseEntity
  {
    public User()
    {
      UserRoles = new HashSet<UserRole>();
    }

    [Key]
    public long UserId { get; set; }
    public string Title { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string MiddleName { get; set; }
    public string Mobile { get; set; }
    public int Gender { get; set; }
    public string Address { get; set; }
    [MaxLength(450)]
    public string EmailAddress { get; set; }
    public string Password { get; set; }
    public string Salt { get; set; }
    public bool IsEmailConfirmed { get; set; }
    public bool IsPhoneConfirmed { get; set; }
    public bool IsLocked { get; set; }
    public string UserName { get; set; }
    public virtual ICollection<UserRole> UserRoles { get; set; }
    public DateTime LastLoginDate { get; set; } = DateTime.Now;
    public RegistrationChannel Channel { get; set; }
    public long ApplicationUserId { get; set; }
    public string ApplicationCode { get; set; }
    public DateTime DateOfBirth { get; internal set; } = DateTime.Now;
    public UserStatus UserStatus { get; set; }
    public List<SocialLogin> SocialLogins { get; set; } = new List<SocialLogin>();
    public List<Claim> Claims { get; set; } = new List<Claim>();

    public string PasswordResetCode { get; set; }
    public DateTime PasswordResetDate { get; set; } = new DateTime();

  }

  public enum RegistrationChannel
  {
    IsMobile = 1,
    IsWeb = 2
  }
  public enum UserStatus { Pending, Verified, Blocked }



  public class UserRole : BaseEntity
  {
    [Key]
    public long UserRoleId { get; set; }
    public long RoleId { get; set; }
    public long UserId { get; set; }

    [ForeignKey("UserId")]
    public virtual User User { get; set; }
    [ForeignKey("RoleId")]
    public virtual Role Role { get; set; }

  }

  public class Role : BaseEntity
  {
    [Key]
    public long RoleId { get; set; }
    public string Name { get; set; }
  }

  public class Claim : BaseEntity
  {
    [Key]
    public int ClaimId { get; set; }
    public string Type { get; set; }
    public string Value { get; set; }
    public long UserId { get; set; }
    public User User { get; set; }
  }
}
