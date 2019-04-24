using shuttercart.Core.Infrastructures;
using shuttercart.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Interfaces
{
  public interface IUserPointService
  {
    Operation<Pagination<UserPointModel>> GetUserPoints(string search, int pageIndex, int pageSize = 100);
    Operation<UserPointModel[]> GetUserPoints();
    Operation<UserPointModel> GetUserPoint(long id);
    Operation<UserPointModel> AddUserPointOrUpdate(UserPointModel model);
    Operation<UserPointModel> DeleteUserPoint(long id);
  }
}
