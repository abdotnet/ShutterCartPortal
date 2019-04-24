using AutoMapper;
using AutoMapper.Configuration;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Infrastructures;
using shuttercart.Core.Interfaces;
using shuttercart.Core.Models;
using shuttercart.Data;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Services
{
  public class ReceiptService : IReceiptService
  {
    private readonly ILogger<ReceiptService> _logger;
    private readonly ShutterCartContext _repo;
    private readonly IMapper _mapper;
    private readonly IUserPointService _point;

    public ReceiptService(ILogger<ReceiptService> logger, ShutterCartContext repo, IMapper mapper, IUserPointService point)
    {
      _logger = logger;
      _repo = repo;
      _mapper = mapper;
      _point = point;
    }

    #region Receipt details

    public Operation<Pagination<ReceiptModel>> GetReceipts(string search, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get receipt ");

        var query = _repo.Receipt.Where(c => !c.IsCancelled).ToArray();

        if (!string.IsNullOrEmpty(search))
          query = query.Where(c => c.ReceiptRef.Contains(search)).ToArray();

        long totalPageSize = query.LongCount();

        if (pageIndex > 0) query = query.OrderByDescending(c => c.CreatedDate).Skip(pageSize).Take(pageIndex * pageSize).ToArray();

        var _query = _mapper.Map<IEnumerable<Receipt>, IEnumerable<ReceiptModel>>(query).ToArray();



        return new Pagination<ReceiptModel>(_query,
           totalPageSize,
          pageIndex,
          pageSize);
      });
    }

    public Operation<ReceiptModel[]> GetReceipts(decimal pointValue = 1)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get receipt ");
        var query = (from r in _repo.Receipt
                       //join p in _repo.UserPoint on r.CreatedBy equals p.UserId
                     join p in _repo.UserPoint on new { uId = r.CreatedBy, up = r.ReceiptId } equals new { uId = p.UserId, up = p.ReceiptId.Value }
                     where !r.IsCancelled && p.Channel == PointChannel.IsTotalAmount
                     select new { r, p }).ToList();

        var lstQuery = new List<ReceiptModel>();

        foreach (var item in query)
        {
          lstQuery.Add(new ReceiptModel()
          {
            Currency = item.r.Currency,
            Date = item.r.Date,
            MerchantName = item.r.MerchantName,
            ReceiptId = item.r.ReceiptId,
            ReceiptRef = item.r.ReceiptRef,
            TotalAmount = item.r.TotalAmount,
            TotalTax = item.r.TotalTax,
            FilePath = item.r.FilePath,
            Category = item.r.Category,
            ContentLength = item.r.ContentLength,
            ContentType = item.r.ContentType,
            PointValue = item.p.Point,
            UserId = item.p.UserId,
            CreatedBy = item.r.CreatedBy,
            CreatedDate = item.r.CreatedDate,
          });
        }
        // var category_query = _mapper.Map<IEnumerable<Receipt>, IEnumerable<ReceiptModel>>(query).ToArray();

        return lstQuery.ToArray();
      });
    }
    public Operation<ReceiptModel> GetReceipt(long id)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get receipt by Id {id}");

        var item = (from r in _repo.Receipt
                    join p in _repo.UserPoint on new { uId = r.CreatedBy, up = r.ReceiptId } equals new { uId = p.UserId, up = p.ReceiptId.Value }
                    where !r.IsCancelled && r.ReceiptId == id
                    select new { r, p }).FirstOrDefault();

        // var query = _repo.Receipt.SingleOrDefault(c => c.ReceiptId == id && !c.IsCancelled);

        if (item == null)
          throw new Exception("Receipt not found");

        return new ReceiptModel()
        {
          Currency = item.r.Currency,
          Date = item.r.Date,
          MerchantName = item.r.MerchantName,
          ReceiptId = item.r.ReceiptId,
          ReceiptRef = item.r.ReceiptRef,
          TotalAmount = item.r.TotalAmount,
          TotalTax = item.r.TotalTax,
          FilePath = item.r.FilePath,
          Category = item.r.Category,
          ContentLength = item.r.ContentLength,
          ContentType = item.r.ContentType,
          PointValue = item.p.Point,
          UserId = item.p.UserId,
          CreatedBy = item.r.CreatedBy,
          CreatedDate = item.r.CreatedDate,
        };

      });
    }
    public Operation<ReceiptModel> GetUserReceiptById(long receiptId)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get receipt  Id {receiptId}");

        var _query = (from r in _repo.Receipt
                      where r.ReceiptId == receiptId
                      select new ReceiptModel
                      {
                        Currency = r.Currency,
                        Date = r.Date,
                        MerchantName = r.MerchantName,
                        ReceiptId = r.ReceiptId,
                        ReceiptRef = r.ReceiptRef,
                        TotalAmount = r.TotalAmount,
                        TotalTax = r.TotalTax,
                        FilePath = r.FilePath,
                        Category = r.Category,
                        ContentLength = r.ContentLength,
                        ContentType = r.ContentType,
                        CreatedBy = r.CreatedBy,
                        CreatedDate = r.CreatedDate,
                        CategoryName = r.Category
                      }).FirstOrDefault();



        return _query;
      });
    }
    public Operation<ReceiptModel[]> GetReceiptByUserId(long userId)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get receipt by user Id {userId}");

        var query = (from r in _repo.Receipt
                     join p in _repo.UserPoint on
                     new { uId = r.CreatedBy, up = r.ReceiptId }
                     equals new { uId = p.UserId, up = p.ReceiptId.Value }
                     where !r.IsCancelled && p.UserId == userId
                     //where p.Channel == PointChannel.IsProduct
                     select new { r, p }).ToList();


        var _query = new List<ReceiptModel>();

        foreach (var item in query)
        {
          _query.Add(new ReceiptModel()
          {
            Currency = item.r.Currency,
            Date = item.r.Date,
            MerchantName = item.r.MerchantName,
            ReceiptId = item.r.ReceiptId,
            ReceiptRef = item.r.ReceiptRef,
            TotalAmount = item.r.TotalAmount,
            TotalTax = item.r.TotalTax,
            FilePath = item.r.FilePath,
            Category = item.r.Category,
            ContentLength = item.r.ContentLength,
            ContentType = item.r.ContentType,
            PointValue = item.p.Point,
            UserId = item.p.UserId,
            CreatedBy = item.r.CreatedBy,
            CreatedDate = item.r.CreatedDate,
          });
        }

        return _query.OrderByDescending(c => c.ReceiptId).ToArray();

      });
    }

    public Operation<ReceiptModel> AddReceiptOrUpdate(ReceiptModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("Receipt cannot be empty");
          throw new Exception("Receipt cannot be empty");
        }

        bool validate = model.Validate();

        if (!validate)
        {
          _logger.LogError("Receipt ref cannot be empty");
          throw new Exception("Receipt ref cannot be empty");
        }

        var query = _repo.Receipt.FirstOrDefault(c => c.ReceiptId == model.ReceiptId);

        if (query == null)
        {
          // Add receipt (OCR)
          query = _mapper.Map<ReceiptModel, Receipt>(model);

          query.CreatedBy = model.CreatedBy.Value;
          query.ContentLength = model.ContentLength;
          query.ContentType = model.ContentType;
          query.FilePath = model.FilePath;
          query.ReceiptData = model.ReceiptData;

          _repo.Add<Receipt>(query);
          _repo.SaveChanges();

          //  Add user point  ..

          decimal point = Math.Floor((decimal)(model.TotalAmount / model.PointValue));

          // this would done manually based on instruction ..

          //_point.AddUserPointOrUpdate(new UserPointModel()
          //{
          //  Channel = PointChannel.IsTotalAmount,
          //  CreatedDate = DateTime.Now,
          //  UserId = model.CreatedBy.Value,
          //  Point = (long)point,

          //});

        }
        else
        {

          query = _mapper.Map<ReceiptModel, Receipt>(model);
          query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
          query.ModifiedDate = DateTime.Now;
          query.CreatedBy = model.CreatedBy.Value;

          query.ContentLength = model.ContentLength;
          query.ContentType = model.ContentType;
          query.FilePath = model.FilePath;
          query.ReceiptData = model.ReceiptData;

          _repo.Update<Receipt>(query);
          _repo.SaveChanges();
        }

        return new ReceiptModel()
        {
          Currency = query.Currency,
          ReceiptId = query.ReceiptId,
          MerchantName = query.MerchantName,
          TotalAmount = query.TotalAmount,
          ReceiptRef = query.ReceiptRef,
          ReceiptData = query.ReceiptData
        };
        // return _mapper.Map<Receipt, ReceiptModel>(query);
      });
    }

    public Operation UpdateReceipt(ReceiptModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("Receipt cannot be empty");
          throw new Exception("Receipt cannot be empty");
        }

        var query = _repo.Receipt.FirstOrDefault(c => c.ReceiptId == model.ReceiptId);


        if (query == null)
          throw new Exception("Receipt data cannot be empty");

        query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
        query.ModifiedDate = DateTime.Now;
        query.CreatedBy = model.CreatedBy.Value;

        query.ReceiptData = model.ReceiptData;
        query.MerchantName = model.MerchantName;
        query.TotalAmount = model.TotalAmount;
        query.TotalTax = model.TotalTax;
        query.ReceiptData = model.ReceiptData;
        query.ReceiptStatus = true;
        query.Category = model.CategoryName;
        _repo.Update<Receipt>(query);
        _repo.SaveChanges();

        // this would done manually based on instruction ..

        _point.AddUserPointOrUpdate(new UserPointModel()
        {
          Channel = PointChannel.IsTotalAmount,
          CreatedDate = DateTime.Now,
          CreatedBy = model.CreatedBy.Value,
          UserId = query.CreatedBy,
          Point = (long)Math.Ceiling((decimal)model.TotalAmount / model.PointValue),
          Amount = model.TotalAmount,
          ReceiptId = query.ReceiptId
        });

      });
    }
    public Operation<ReceiptModel> DeleteReceipt(long id)
    {
      return Operation.Create(() =>
      {
        var query = _repo.Receipt.FirstOrDefault(c => c.ReceiptId == id && !c.IsCancelled);

        if (query == null)
          throw new Exception("Receipt not found");

        query.IsCancelled = true;

        _repo.Update<Receipt>(query);
        _repo.SaveChanges();
        _logger.LogInformation($"Receipt has been deleted with Id= {id} ");

        return new ReceiptModel()
        {
          ReceiptId = query.ReceiptId,
          ReceiptRef = query.ReceiptRef,
          TotalTax = query.TotalTax,
          TotalAmount = query.TotalAmount,
          MerchantName = query.MerchantName,
          Currency = query.Currency,
          Date = query.CreatedDate,
        };
      });
    }
  }
  #endregion
}
