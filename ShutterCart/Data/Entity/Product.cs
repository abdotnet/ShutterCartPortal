using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data.Entity
{
  public class Product : BaseEntity
  {
    [Key]
    public long ProductId { get; set; }
    public string ProductName { get; set; }
    public string  ImageUrl { get; set; }
    public decimal Price { get; set; }
    public long CategoryId { get; set; }
    [ForeignKey("CategoryId")]
    public Category Category { get; set; }
  }
}
