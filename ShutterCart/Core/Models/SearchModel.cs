using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class SearchModel
  {
    public string Search { get; set; }
    public int PageIndex { get; set; }
    public int PageSize { get; set; }
  }
}
