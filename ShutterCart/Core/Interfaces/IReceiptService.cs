using shuttercart.Core.Infrastructures;
using shuttercart.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Interfaces
{
  public interface IReceiptService
  {
    Operation<Pagination<ReceiptModel>> GetReceipts(string search, int pageIndex, int pageSize = 100);
    Operation<ReceiptModel[]> GetReceipts(decimal pointValue = 1);
    Operation<ReceiptModel> GetReceipt(long id);
    Operation<ReceiptModel> AddReceiptOrUpdate(ReceiptModel model);
    Operation<ReceiptModel> DeleteReceipt(long id);
    Operation<ReceiptModel[]> GetReceiptByUserId(long userId);
    Operation<ReceiptModel> GetUserReceiptById(long userId);
    Operation UpdateReceipt(ReceiptModel model);
  }
}
