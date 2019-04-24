using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class ReportModel : Model
  {
    public long Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public long Point { get; set; }
    public string ItemPurchased { get; set; }
    public decimal TotalAmount { get; set; }
    public PointChannel Channel { get; set; }
  }
}
