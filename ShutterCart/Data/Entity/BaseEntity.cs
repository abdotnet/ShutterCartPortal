using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data.Entity
{
  public class BaseEntity
  {
    public DateTime CreatedDate { get; set; } = new DateTime();
    public long CreatedBy { get; set; }
    public DateTime? ModifiedDate { get; set; }
    public long ModifiedBy { get; set; }

    public bool IsCancelled { get; set; }

    public bool Status { get; set; }

  }


}
