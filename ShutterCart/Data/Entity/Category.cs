using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data.Entity
{
  public class Category :BaseEntity
  {
    [Key]
    public long CategoryId { get; set; }
    public string Name { get; set; }
    public string Icon { get; set; }
    public virtual long ContentLength { get; set; }
    [StringLength(maximumLength: 20)]
    public virtual string ContentType { get; set; }
  }
}
