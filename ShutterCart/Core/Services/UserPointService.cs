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
  public class UserPointService : IUserPointService
  {
    private readonly ILogger<UserPointService> _logger;
    private readonly ShutterCartContext _repo;
    private readonly IMapper _mapper;

    public UserPointService(ILogger<UserPointService> logger, ShutterCartContext repo, IMapper mapper)
    {
      _logger = logger;
      _repo = repo;
      _mapper = mapper;
    }


    #region Video details

    public Operation<Pagination<UserPointModel>> GetUserPoints(string search, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get user point ");

        var query = _repo.UserPoint.Include(c => c.User).Where(c => !c.IsCancelled).ToArray();

        //if (!string.IsNullOrEmpty(search))
        //  query = query.Where(c => c..Contains(search)).ToArray();

        long totalPageSize = query.LongCount();

        if (pageIndex > 0) query = query.OrderByDescending(c => c.CreatedDate).Skip(pageSize).Take(pageIndex * pageSize).ToArray();

        var _query = _mapper.Map<IEnumerable<UserPoint>, IEnumerable<UserPointModel>>(query).ToArray();



        return new Pagination<UserPointModel>(_query,
           totalPageSize,
          pageIndex,
          pageSize);
      });
    }

    public Operation<UserPointModel[]> GetUserPoints()
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get user  point ");

        var query = _repo.UserPoint.Include(c => c.User).Where(s => !s.IsCancelled).ToList();

        var _query = _mapper.Map<IEnumerable<UserPoint>, IEnumerable<UserPointModel>>(query).ToArray();

        return _query;
      });
    }
    public Operation<UserPointModel> GetUserPoint(long id)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get user point by Id {id}");
        var query = _repo.UserPoint.SingleOrDefault(c => c.UserPointId == id);

        var _query = _mapper.Map<UserPoint, UserPointModel>(query);

        return _query;
      });
    }

    public Operation<UserPointModel> AddUserPointOrUpdate(UserPointModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("UserPoint cannot be empty");
          throw new Exception("UserPoint cannot be empty");
        }

        bool validate = model.Validate();
        if (!validate)
        {
          _logger.LogError("UserPoint ref cannot be empty");
          throw new Exception("UserPoint ref cannot be empty");
        }

        var query = _repo.UserPoint.FirstOrDefault(c => c.UserPointId == model.UserPointId);

        if (query == null)
        {
          query = _mapper.Map<UserPointModel, UserPoint>(model);
          query.ReceiptId = model.ReceiptId;
          query.QuestionId = model.QuestionId;
          query.ProductId = model.ProductId;
          query.VideoId = model.VideoId;

          _repo.Add<UserPoint>(query);
          _repo.SaveChanges();
        }
        else
        {

          //query = _mapper.Map<VideoModel, Video>(model);

          query.UserId = model.UserId;
          query.Channel = model.Channel;
          query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
          query.ModifiedDate = DateTime.Now;
          query.Point = model.Point;

          query.ReceiptId = model.ReceiptId;
          query.QuestionId = model.QuestionId;
          query.ProductId = model.ProductId;
          query.VideoId = model.VideoId;

          _repo.Update<UserPoint>(query);
          _repo.SaveChanges();
        }

        return new UserPointModel()
        {
          Channel = query.Channel,
          IsCancelled = query.IsCancelled,
          Point = query.Point,
          UserId = query.UserId,
          UserPointId = query.UserPointId,
          Status = query.Status,
          CreatedBy = query.CreatedBy
        };
      });
    }

    public Operation<UserPointModel> UpdateReceipt(UserPointModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("UserPoint cannot be empty");
          throw new Exception("UserPoint cannot be empty");
        }

        bool validate = model.Validate();
        if (!validate)
        {
          _logger.LogError("UserPoint ref cannot be empty");
          throw new Exception("UserPoint ref cannot be empty");
        }

        var query = _repo.UserPoint.FirstOrDefault(c => c.UserPointId == model.UserPointId);

        if (query == null)
        {
          query = _mapper.Map<UserPointModel, UserPoint>(model);
          query.ReceiptId = model.ReceiptId;
          query.QuestionId = model.QuestionId;
          query.ProductId = model.ProductId;
          query.VideoId = model.VideoId;

          _repo.Add<UserPoint>(query);
          _repo.SaveChanges();
        }
        else
        {

          //query = _mapper.Map<VideoModel, Video>(model);

          query.UserId = model.UserId;
          query.Channel = model.Channel;
          query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
          query.ModifiedDate = DateTime.Now;
          query.Point = model.Point;

          query.ReceiptId = model.ReceiptId;
          query.QuestionId = model.QuestionId;
          query.ProductId = model.ProductId;
          query.VideoId = model.VideoId;

          _repo.Update<UserPoint>(query);
          _repo.SaveChanges();
        }

        return new UserPointModel()
        {
          Channel = query.Channel,
          IsCancelled = query.IsCancelled,
          Point = query.Point,
          UserId = query.UserId,
          UserPointId = query.UserPointId,
          Status = query.Status,
          CreatedBy = query.CreatedBy
        };
      });
    }
    public Operation<UserPointModel> DeleteUserPoint(long id)
    {
      return Operation.Create(() =>
      {
        var query = _repo.UserPoint.Find(id);
        query.IsCancelled = true;

        _repo.Update<UserPoint>(query);
        _repo.SaveChanges();
        _logger.LogInformation($"Userpoint has been deleted with Id= {id} ");
        return _mapper.Map<UserPoint, UserPointModel>(query);
      });
    }


    #endregion

  }
}
