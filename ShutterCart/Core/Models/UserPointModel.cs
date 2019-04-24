using Newtonsoft.Json;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class UserPointModel : Model
  {
    public long UserPointId { get; set; }
    [Required]
    public long Point { get; set; }
    [Required]
    public long UserId { get; set; }
    public UserModel User { get; set; }
    [JsonIgnore]
    public PointChannel Channel { get; set; }
    public decimal Amount { get; set; }

    public long? ReceiptId { get; set; }
    public Receipt Receipt { get; set; }
    public long? QuestionId { get; set; }
    public Questions Questions { get; set; }

    public long? VideoId { get; set; }
    public Video Video { get; set; }

    public long? ProductId { get; set; }
    public Product Product { get; set; }
  }

  public class UserAmountPointModel : Model
  {
    public decimal TotalAmount { get; set; }
    public long TotalPoint { get; set; }
  }

}
