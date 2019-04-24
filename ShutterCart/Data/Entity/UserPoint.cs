using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data.Entity
{
  public class UserPoint : BaseEntity
  {
    [Key]
    public long UserPointId { get; set; }
    public long Point { get; set; }
    public long UserId { get; set; }
    [ForeignKey("UserId")]
    public User User { get; set; }
    public PointChannel Channel { get; set; }
    public long? ReceiptId { get; set; }
    [ForeignKey("ReceiptId")]
    public Receipt Receipt { get; set; }
    public long? QuestionId { get; set; }
    [ForeignKey("QuestionId")]
    public Questions Questions { get; set; }

    public long? VideoId { get; set; }
    [ForeignKey("VideoId")]
    public Video Video { get; set; }

    public long? ProductId { get; set; }
    [ForeignKey("ProductId")]
    public Product Product { get; set; }

  }

  /// <summary>
  /// Where the points are comming from  .. 
  /// </summary>
  public enum PointChannel
  {
    IsTotalAmount = 0, // receipt
    IsQuestion = 1, // question
    IsProduct = 2, // product
    IsVideoWatched = 3, // video
    Shared = 4 // 
  }
}
