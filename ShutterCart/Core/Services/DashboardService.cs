using AutoMapper;
using AutoMapper.Configuration;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Interfaces;
using shuttercart.Core.Models;
using shuttercart.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shuttercart.Core.Services
{
  public class DashboardService : IDashboardService
  {
    private readonly ILogger<DashboardService> _logger;
    private readonly ShutterCartContext _repo;

    public DashboardService(ILogger<DashboardService> logger, ShutterCartContext repo)
    {
      _logger = logger;
      _repo = repo;
    }

    #region get dashboard

    public Operation<DashboardModel> GetDahboard()
    {
      return Operation.Create(() =>
      {

        var model = new DashboardModel();

        //Last 20 list of Receipts
        model.CategoryCount = _repo.Category.Where(c => !c.IsCancelled).LongCount();
        model.AdvertCount = _repo.Advert.Where(c => !c.IsCancelled).LongCount();
        model.ProductCount = _repo.Product.Where(c => !c.IsCancelled).LongCount();
        model.QuestionCount = _repo.Question.Where(c => !c.IsCancelled).LongCount();
        model.ReceiptCount = _repo.Receipt.Where(c => !c.IsCancelled).LongCount();
        model.VideoCount = _repo.Video.Where(c => !c.IsCancelled).LongCount();
        model.UsersCount = _repo.Users.Where(c => !c.IsCancelled).LongCount();
        model.TotalSurveyAnsweredCount = _repo.SurveyQuestion.Where(c => !c.IsCancelled).LongCount();
        model.TotalShareAndEarnCount =
        _repo.UserPoint.Where(c => !c.IsCancelled).Where(c => c.Channel == Data.Entity.PointChannel.IsProduct)
        .LongCount();
        model.TotalShareAndEarnCount = _repo.UserPoint.Where(c => !c.IsCancelled)
        .Where(c => c.Channel == Data.Entity.PointChannel.IsVideoWatched)
        .LongCount();

        var receipt_data = from r in _repo.Receipt
                           where !r.IsCancelled
                           select new { r };

        receipt_data.OrderByDescending(c => c.r.ReceiptId).Take(10).ToList().ForEach(item =>
          {
            var c = item.r;
            model.ReceiptModel.Add(new ReceiptModel()
            {
              Category = c.Category,
              ContentLength = c.ContentLength,
              ContentType = c.ContentType,
              Date = c.Date,
              Currency = c.Currency,
              FilePath = c.FilePath,
              MerchantName = c.MerchantName,
              ReceiptRef = c.ReceiptRef,
              ReceiptId = c.ReceiptId,
              TotalAmount = c.TotalAmount,
              Status = c.Status,
              // PointValue = item.u.Point,
              // UserId = item.u.UserId,
              TotalTax = c.TotalTax,
            });
          });

        return model;
      });
    }

    #endregion

  }
}
