using shuttercart.Core.Infrastructures;
using shuttercart.Core.Models;
using System;

namespace shuttercart.Core.Interfaces
{
  public interface IWalletService
  {
    Operation<Pagination<UserPointModel>> GetUserPoint(string search, int pageIndex, int pageSize = 100);
    Operation<UserPointModel[]> GetUserPoint();
    Operation<UserPointModel> GetUserPoint(long id);
    Operation<UserPointModel[]> GetPointByUser(long userId);
    Operation<UserPointModel> AddOrUpdateUserPoint(UserPointModel model);
    Operation<UserPointModel> DeleteUserPoint(long id);
    Operation<UserAmountPointModel> GetAmountPoints(long userId, decimal amount);
    Operation<UserPointModel[]> GetPointByUser(long userId, decimal pointAmount);
    Operation<UserPointModel> GetUserPoint(long id, decimal amount);
  }
}
