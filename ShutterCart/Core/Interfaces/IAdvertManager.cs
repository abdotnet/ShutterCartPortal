using shuttercart.Core.Infrastructures;
using shuttercart.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Interfaces
{
    public interface IAdvertService
    {

    Operation<Pagination<AdvertModel>> GetAdverts(string search, int pageIndex, int pageSize = 100);
    Operation<AdvertModel[]> GetAdverts();
    Operation<AdvertModel> GetAdvert(long id);
    Operation<AdvertModel> AddAdvertOrUpdate(AdvertModel model);
    Operation<AdvertModel> DeleteAdvert(long id);
    Operation UpdateImages(string fileName, int id);
  }
}
