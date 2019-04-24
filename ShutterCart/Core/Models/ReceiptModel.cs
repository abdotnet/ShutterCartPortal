using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class ReceiptModel : Model
  {
    public long ReceiptId { get; set; }
    public string MerchantName { get; set; }
    public string Category { get; set; }
    public string CategoryName { get; set; }
    public DateTime Date { get; set; } = DateTime.Now;
    public string Currency { get; set; }
    public decimal TotalAmount { get; set; }
    public decimal TotalTax { get; set; }
    public string ReceiptRef { get; set; }
    public decimal PointValue { get; set; }
    public long UserId { get; set; }
    public UserModel UserModel { get; set; }

    public string FilePath { get; set; }
    public long ContentLength { get; set; }
    public string ContentType { get; set; }
    public virtual string ReceiptData { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public bool ReceiptStatus { get; internal set; }
  }
}
