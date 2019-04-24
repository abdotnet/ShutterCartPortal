using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data.Entity
{
  public class Receipt : BaseEntity
  {
    [Key]
    public long ReceiptId { get; set; }
    public string MerchantName { get; set; }
    public string Category { get; set; }
    public DateTime Date { get; set; }
    public string Currency { get; set; }
    public decimal TotalAmount { get; set; }
    public decimal TotalTax { get; set; }
    public string ReceiptRef { get; set; }
    public virtual string FilePath { get; set; }
    public virtual long ContentLength { get; set; }
    [StringLength(maximumLength: 20)]
    public virtual string ContentType { get; set; }
    public virtual string ReceiptData { get; set; }
    public virtual bool ReceiptStatus { get; set; }
  }
}
