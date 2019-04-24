using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class ClaimModel : Model
  {
    public long UserId { get; internal set; }
    public string Type { get; internal set; }
    public string Value { get; internal set; }
  }
}
