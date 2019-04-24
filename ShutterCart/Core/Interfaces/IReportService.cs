using shuttercart.Core.Infrastructures;
using shuttercart.Core.Models;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shuttercart.Core.Interfaces
{
  public interface IReportService
  {
    //  Operation<Pagination<ReportModel>> GetUserPoint(string search, int pageIndex, int pageSize = 100, decimal pointAmount = 0, PointChannel channel = PointChannel.Shared);
    //  Operation<Pagination<UserModel>> GetUsers(string search, int pageIndex, int pageSize = 100);
    //  Operation<Pagination<UserPointEarnedModel>> GetUserPoints(string search, PointChannel channel, int pageIndex, int pageSize = 100, int pointAmount = 0);
    //  Operation<Pagination<ReceiptModel>> GetUserReceipts(string search, int pageIndex, int pageSize = 100, int pointValue = 0);

      /// <summary>
      /// 
      /// </summary>
      /// <param name="search"></param>
      /// <param name="pageIndex"></param>
      /// <param name="pageSize"></param>
      /// <returns></returns>
    Operation<Pagination<UserModel>> GetRegisteredUsers(string search, int pageIndex, int pageSize = 100);
    /// <summary>
    /// 
    /// </summary>
    /// <param name="search"></param>
    /// <param name="pageIndex"></param>
    /// <param name="pageSize"></param>
    /// <param name="pointValue"></param>
    /// <returns></returns>
    Operation<Pagination<UserPointEarnedModel>> GetWalletPoints(string search, int pageIndex, int pageSize = 100, int pointValue = 0);
    /// <summary>
    /// 
    /// </summary>
    /// <param name="channel"></param>
    /// <param name="search"></param>
    /// <param name="pageIndex"></param>
    /// <param name="pageSize"></param>
    /// <param name="pointValue"></param>
    /// <returns></returns>
    Operation<Pagination<UserPointEarnedModel>> GetChannelPoints(PointChannel channel, string search, int pageIndex, int pageSize = 100, int pointValue = 0);
    /// <summary>
    /// 
    /// </summary>
    /// <param name="search"></param>
    /// <param name="pageIndex"></param>
    /// <param name="pageSize"></param>
    /// <param name="pointValue"></param>
    /// <returns></returns>
    Operation<Pagination<ReceiptModel>> GetReceipts(string search, int pageIndex, int pageSize = 100, int pointValue = 0);

  }
}
