using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class CategoryModel : Model
  {
    public long CategoryId { get; set; }
    [Required]
    public string Name { get; set; }
    public string Icon { get; set; }
    public virtual string ContentType { get; set; }
    public virtual long ContentLength { get; set; }
  }

  public class ProductModel : Model
  {
    [Key]
    public long ProductId { get; set; }
    [Required]
    public string ProductName { get; set; }
    public string ImageUrl { get; set; }
    public decimal Price { get; set; }
    [Required]
    public long CategoryId { get; set; }
    public CategoryModel Category { get; set; }
  }
}
