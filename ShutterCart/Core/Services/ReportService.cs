using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Infrastructures;
using shuttercart.Core.Interfaces;
using shuttercart.Core.Models;
using shuttercart.Data;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shuttercart.Core.Services
{
  public class ReportService : IReportService
  {
    private readonly ILogger<ReportService> _logger;
    private readonly ShutterCartContext _repo;
    private readonly IMapper _mapper;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="logger"></param>
    /// <param name="repo"></param>
    /// <param name="mapper"></param>
    public ReportService(ILogger<ReportService> logger, ShutterCartContext repo, IMapper mapper)
    {
      _logger = logger;
      _repo = repo;
      _mapper = mapper;
    }

    #region Report Service

    // Registered users report  ..

    /// <summary>
    ///  Get registered users..
    /// </summary>
    /// <param name="search"></param>
    /// <param name="pageIndex"></param>
    /// <param name="pageSize"></param>
    /// <returns></returns>
    public Operation<Pagination<UserModel>> GetRegisteredUsers(string search, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        var _query = _repo.Users.Select(c => new UserModel()
        {
          Address = c.Address,
          Channel = c.Channel,
          DateOfBirth = c.DateOfBirth,
          FirstName = c.FirstName,
          EmailAddress = c.EmailAddress,
          Gender = c.Gender,
          LastName = c.LastName,
          MiddleName = c.MiddleName,
          Mobile = c.Mobile,
          LastLoginDate = c.LastLoginDate,
          Title = c.Title,
          UserId = c.UserId,
          UserName = c.UserName,

        }).ToArray();

        long totalCount = _query.LongCount();

        if (pageIndex > 0) _query = _query.Skip(pageSize).Take(pageIndex * pageSize).ToArray();

        return new Pagination<UserModel>(_query, totalCount,
          pageIndex,
          pageSize);
      });
    }

    // report all point earned via sharing/video watched / survey  ..

    /// <summary>
    /// Get user information by diff channel ..
    /// </summary>
    /// <param name="search"></param>
    /// <param name="channel"></param>
    /// <param name="pageIndex"></param>
    /// <param name="pageSize"></param>
    /// <param name="pointValue"></param>
    /// <returns></returns>
    public Operation<Pagination<UserPointEarnedModel>> GetWalletPoints(string search, int pageIndex, int pageSize = 100, int pointValue = 0)
    {
      return Operation.Create(() =>
      {

        var query = _repo.UserPoint.Include(c => c.User)
                                    .Select(c => new UserPointEarnedModel()
                                    {
                                      LastName = c.User.LastName,
                                      FirstName = c.User.FirstName,
                                      Mobile = c.User.Mobile,
                                      Point = c.Point,
                                      Channel = c.Channel,
                                      CreatedDate = c.CreatedDate,
                                      TotalAmount = c.Point * pointValue // calculate point multily to total amount
                                    }).ToArray();


        long totalCount = query.LongCount();

        if (pageIndex > 0) query = query.Skip(pageSize).Take(pageIndex * pageSize).ToArray();

        return new Pagination<UserPointEarnedModel>(query, totalCount, pageIndex, pageSize);

      });
    }

    /// <summary>
    /// Get channel point reports
    /// </summary>
    /// <param name="channel"></param>
    /// <param name="search"></param>
    /// <param name="pageIndex"></param>
    /// <param name="pageSize"></param>
    /// <param name="pointValue"></param>
    /// <returns></returns>
    public Operation<Pagination<UserPointEarnedModel>> GetChannelPoints(PointChannel channel, string search, int pageIndex, int pageSize = 100, int pointValue = 0)
    {
      return Operation.Create(() =>
      {

        var query = _repo.UserPoint.Include(c => c.User).Where(c => c.Channel == channel).
        Select(c => new UserPointEarnedModel()
        {
          LastName = c.User.LastName,
          FirstName = c.User.FirstName,
          Mobile = c.User.Mobile,
          Point = c.Point,
          Channel = c.Channel,
          CreatedDate = c.CreatedDate,
          TotalAmount = c.Point * pointValue // calculate point multily to total amount
        }).ToArray();

        long totalCount = query.LongCount();

        if (pageIndex > 0) query = query.Skip(pageSize).Take(pageIndex * pageSize).ToArray();

        return new Pagination<UserPointEarnedModel>(query, totalCount, pageIndex, pageSize);

      });
    }

    /// <summary>
    /// Get receipts
    /// </summary>
    /// <param name="search"></param>
    /// <param name="pageIndex"></param>
    /// <param name="pageSize"></param>
    /// <param name="pointValue"></param>
    /// <returns></returns>
    public Operation<Pagination<ReceiptModel>> GetReceipts(string search, int pageIndex, int pageSize = 100, int pointValue = 0)
    {
      return Operation.Create(() =>
      {

        var _query = (from r in _repo.Receipt
                      join user in _repo.Users on r.CreatedBy equals user.UserId
                      where !r.IsCancelled
                      select new ReceiptModel
                      {
                        Category = r.Category,
                        ContentLength = r.ContentLength,
                        ContentType = r.ContentType,
                        Date = r.Date,
                        Currency = r.Currency,
                        FilePath = r.FilePath,
                        MerchantName = r.MerchantName,
                        PointValue = pointValue,
                        ReceiptId = r.ReceiptId,
                        ReceiptRef = r.ReceiptRef,
                        TotalAmount = r.TotalAmount,
                        UserId = r.CreatedBy,
                        TotalTax = r.TotalTax,
                        CreatedDate = r.CreatedDate,
                        ReceiptData = r.ReceiptData,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        ReceiptStatus = r.ReceiptStatus,
                        CategoryName = r.Category
                      }).ToArray();


        long totalCount = _query.LongCount();

        if (pageIndex > 0) _query = _query.Skip(pageSize).Take(pageIndex * pageSize).ToArray();

        return new Pagination<ReceiptModel>(_query, totalCount,
          pageIndex,
          pageSize);
      });
    }

    //public Operation<Pagination<ReportModel>> GetUserPoint(string search, int pageIndex, int pageSize = 100, decimal pointAmount = 0, PointChannel channel = PointChannel.Shared)
    //   {
    //     return Operation.Create(() =>
    //     {
    //       _logger.LogInformation("I am currently @ the get user point report ");

    //       var _query = (from u in _repo.Users
    //                     join up in _repo.UserPoint on u.UserId equals up.UserId
    //                     where up.Channel == channel
    //                     where !u.IsCancelled
    //                     select new ReportModel
    //                     {
    //                       Id = up.UserPointId,
    //                       FirstName = u.FirstName,
    //                       LastName = u.LastName,
    //                       Point = up.Point,
    //                       TotalAmount = up.Point * pointAmount,
    //                       Channel = up.Channel,
    //                       CreatedDate = up.CreatedDate,
    //                     }).ToArray();


    //       if (!string.IsNullOrEmpty(search))
    //         _query = _query.Where(c => c.LastName.Contains(search) || c.FirstName.Contains(search)).ToArray();


    //       long totalCount = _query.LongCount();

    //       if (pageIndex > 0) _query = _query.Skip(pageSize).Take(pageIndex * pageSize).ToArray();

    //       return new Pagination<ReportModel>(_query, totalCount,
    //         pageIndex,
    //         pageSize);
    //     });
    //   }

    #endregion
  }
}
