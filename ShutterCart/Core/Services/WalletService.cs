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
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Services
{
  public class WalletService : IWalletService
  {
    private readonly ILogger<WalletService> _logger;
    private readonly ShutterCartContext _repo;
    private readonly IMapper _mapper;

    public WalletService(ILogger<WalletService> logger, ShutterCartContext repo, IMapper mapper)
    {
      _logger = logger;
      _repo = repo;
      _mapper = mapper;
    }

    #region Wallet Services 

    public Operation<Pagination<UserPointModel>> GetUserPoint(string search, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get user point ");

        var query = _repo.UserPoint.Include(c => c.User).Where(s => !s.IsCancelled).ToList();

        if (!string.IsNullOrEmpty(search))
          query = query.Where(c => c.User.FirstName.Contains(search)).ToList();

        long totalCount = query.LongCount();
        if (pageIndex > 0) query = query.Skip(pageSize).Take(pageIndex * pageSize).ToList();

        var mapping = _mapper.Map<IEnumerable<UserPoint>, IEnumerable<UserPointModel>>(query).ToArray();

        return new Pagination<UserPointModel>(mapping, totalCount, pageSize, pageIndex);

      });
    }

    public Operation<UserPointModel[]> GetUserPoint()
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get user point ");
        var query = _repo.UserPoint.Where(s => !s.IsCancelled).ToList();

        var _query = _mapper.Map<IEnumerable<UserPoint>, IEnumerable<UserPointModel>>(query).ToArray();

        return _query;
      });
    }
    public Operation<UserPointModel> GetUserPoint(long id)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get product by user point Id {id}");

        var query = _repo.UserPoint.SingleOrDefault(c => c.UserPointId == id);


        //  var _query = _mapper.Map<UserPoint, UserPointModel>(query);

        return new UserPointModel()
        {
          Amount = query.Point * 1,
          Point = query.Point,
          UserId = query.UserId,
          Channel = query.Channel,
          UserPointId = query.UserPointId,
        };
      });
    }
    public Operation<UserPointModel> GetUserPoint(long id, decimal amount)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get product by user point Id {id}");

        var query = _repo.UserPoint.SingleOrDefault(c => c.UserPointId == id);


        //  var _query = _mapper.Map<UserPoint, UserPointModel>(query);

        return new UserPointModel()
        {
          Amount = query.Point * amount,
          Point = query.Point,
          UserId = query.UserId,
          Channel = query.Channel,
          UserPointId = query.UserPointId,
        };
      });
    }
    public Operation<UserPointModel[]> GetPointByUser(long userId)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get point by user by Id {userId}");

        var query = _repo.UserPoint.Where(c => c.User.UserId == userId);

        var _query = _mapper.Map<IEnumerable<UserPoint>, IEnumerable<UserPointModel>>(query);

        return _query.ToArray();
      });
    }
    public Operation<UserPointModel[]> GetPointByUser(long userId, decimal pointAmount)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get point by user by Id {userId}");

        var query = _repo.UserPoint.Include("User").Where(c => c.UserId == userId);


        var lstQuery = new List<UserPointModel>();

        foreach (var item in query)
        {
          lstQuery.Add(new UserPointModel()
          {
            Amount = item.Point * pointAmount,
            Point = item.Point,
            Channel = item.Channel,
            UserId = item.UserId,
            UserPointId = item.UserPointId,
            IsCancelled = item.IsCancelled,
            CreatedDate = item.CreatedDate,
          });
        }

        return lstQuery.OrderByDescending(c=>c.UserPointId).ToArray();
      });
    }

    public Operation UpdateImages(string fileName, int productId)
    {
      return Operation.Create(() =>
      {
        if (fileName == string.Empty || productId == 0)
          throw new Exception("filename cannot be empty or product not found");

        var product = _repo.Product.FirstOrDefault(c => c.ProductId == productId);

        if (product != null)
        {
          product.ImageUrl = fileName;
          _repo.Update<Product>(product);
          _repo.SaveChanges();
        }
      });
    }

    public Operation<UserPointModel> AddOrUpdateUserPoint(UserPointModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("User point cannot be empty");
          throw new Exception("User point cannot be empty");
        }

        bool validate = model.Validate();
        if (!validate)
        {
          _logger.LogError("User point name cannot be empty");
          throw new Exception("User point name cannot be empty");
        }

        var query = _repo.UserPoint.Include(c => c.User).FirstOrDefault(c => c.UserPointId == model.UserPointId);

        if (query == null)
        {
          query = _mapper.Map<UserPointModel, UserPoint>(model);
          _repo.Add<UserPoint>(query);
          _repo.SaveChanges();
        }
        else
        {
          query.Channel = model.Channel;
          query.UserId = model.UserId;
          query.Point = model.Point;

          query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
          query.ModifiedDate = DateTime.Now;

          _repo.Update<UserPoint>(query);
          _repo.SaveChanges();
        }

        return _mapper.Map<UserPoint, UserPointModel>(query);
      });
    }
    public Operation<UserPointModel> DeleteUserPoint(long id)
    {
      return Operation.Create(() =>
      {
        var query = _repo.UserPoint.SingleOrDefault(c => c.UserPointId == id);
        query.IsCancelled = true;

        _repo.Update<UserPoint>(query);
        _repo.SaveChanges();
        _logger.LogInformation($"User point has been deleted with Id= {id} ");
        return _mapper.Map<UserPoint, UserPointModel>(query);
      });
    }
    public Operation<UserAmountPointModel> GetAmountPoints(long userId, decimal amount)
    {
      return Operation.Create(() =>
      {

        var query = _repo.UserPoint.Where(c => c.UserId == userId).ToList();

        return new UserAmountPointModel()
        {
          TotalAmount = query.Count * amount,
          TotalPoint = query.Count
        };
      });
    }

    #endregion


  }
}
