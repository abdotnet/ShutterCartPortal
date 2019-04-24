using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data.Entity
{
  public class Notification
  {
    public long Id { get; private set; }
    public DateTime CreatedDate { get; set; }
    public NotificationType Type { get; private set; }
    public DateTime? OriginalDateTime { get; set; }
    public string OriginalValue { get; set; }
    // osh added gig object required
    public PushType PushType { get; set; }    // The object you want to send notification for .. 
  }

  public class UserNotification
  {
    [Key]
    [Column(Order = 1)]
    public long UserId { get; private set; }
    [Key]
    [Column(Order = 2)]
    public long NotificationId { get; private set; }
    public User User { get; set; }
    public Notification Notification { get; set; }
    public bool IsRead { get; set; }

  }

  public enum NotificationType
  {
    Canceled = 1,
    Updated = 2,
    Created = 3
  }
  // The object you want to send notification for .. 
  public enum PushType
  {
    Receipt = 1
  }
}
