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
  public class VideoServices : IVideoServices
  {
    private readonly ILogger<VideoServices> _logger;
    private readonly ShutterCartContext _repo;
    private readonly IMapper _mapper;
    private readonly IUserPointService userPoint;

    public VideoServices(ILogger<VideoServices> logger, ShutterCartContext repo, IMapper mapper, IUserPointService userPoint)
    {
      _logger = logger;
      _repo = repo;
      _mapper = mapper;
      this.userPoint = userPoint;



    }

    #region Video details

    public Operation<Pagination<VideoModel>> GetVideos(string search, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get video ");

        var query = _repo.Video.Include(c => c.Genre).Where(c => !c.IsCancelled).ToArray();

        if (!string.IsNullOrEmpty(search))
          query = query.Where(c => c.Title.Contains(search)).ToArray();

        long totalPageSize = query.LongCount();

        if (pageIndex > 0) query = query.OrderByDescending(c => c.CreatedDate).Skip(pageSize).Take(pageIndex * pageSize).ToArray();

        var _query = _mapper.Map<IEnumerable<Video>, IEnumerable<VideoModel>>(query).ToArray();



        return new Pagination<VideoModel>(_query, totalPageSize,
          pageIndex,
          pageSize);
      });
    }

    public Operation<VideoModel[]> GetVideos()
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get Video ");

        var query = _repo.Video.Include(c => c.Genre).Where(s => !s.IsCancelled).ToList();

        var _query = _mapper.Map<IEnumerable<Video>, IEnumerable<VideoModel>>(query).ToArray();

        return _query;
      });
    }
    public Operation<VideoModel> GetVideo(long id)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get video by Id {id}");

        var query = _repo.Video.SingleOrDefault(c => c.Id == id);

        var _query = _mapper.Map<Video, VideoModel>(query);

        return _query;
      });
    }

    public Operation<VideoModel> AddVideoOrUpdate(VideoModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("Video cannot be empty");
          throw new Exception("Video cannot be empty");
        }

        bool validate = model.Validate();
        if (!validate)
        {
          _logger.LogError("Video ref cannot be empty");
          throw new Exception("Video ref cannot be empty");
        }

        var query = _repo.Video.FirstOrDefault(c => c.Id == model.Id);

        if (query == null)
        {
          query = _mapper.Map<VideoModel, Video>(model);
          query.Points = model.Points;

          _repo.Add<Video>(query);
          _repo.SaveChanges();
        }
        else
        {

          //query = _mapper.Map<VideoModel, Video>(model);

          query.ThumbNail = model.ThumbNail ?? query.ThumbNail;
          query.Title = model.Title == null ? query.Title : model.Title;
          query.Views = model.Views <= 0 ? query.Views : model.Views;
          query.Points = model.Points <= 0 ? query.Points : model.Points;
          query.Author = model.Author ?? query.Author;

          query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
          query.ModifiedDate = DateTime.Now;

          _repo.Update<Video>(query);
          _repo.SaveChanges();
        }

        return _mapper.Map<Video, VideoModel>(query);
      });
    }
    public Operation<VideoModel> DeleteVideo(long id)
    {
      return Operation.Create(() =>
      {
        var query = _repo.Video.Find(id);
        query.IsCancelled = true;

        _repo.Update<Video>(query);
        _repo.SaveChanges();
        _logger.LogInformation($"Video has been deleted with Id= {id} ");
        return _mapper.Map<Video, VideoModel>(query);
      });
    }


    public Operation UpdateVideo(string fileName, int videoId)
    {
      return Operation.Create(() =>
      {
        if (fileName == string.Empty || videoId == 0)
          throw new Exception("filename cannot be empty or video not found");

        var video = _repo.Video.FirstOrDefault(c => c.Id == videoId);

        if (video != null)
        {
          if (fileName.Contains(".jpg") || fileName.Contains(".jpeg") || fileName.Contains(".gif") || fileName.Contains(".png"))
          {
            video.ThumbNail = fileName;
          }
          else
          {
            video.VideoUrl = fileName;
          }

          _repo.Update<Video>(video);
          _repo.SaveChanges();
        }
      });
    }

    public Operation AddWatchedVideoPoint(VideoParam model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
          throw new Exception("Video param cannot be empty");

        userPoint.AddUserPointOrUpdate(new UserPointModel()
        {
          Channel = model.Channel,
          Point = model.Point,
          UserId = model.UserId,
        });

        return;

      });
    }

    #endregion


    #region Genre details

    public Operation<Pagination<GenreModel>> GetGenre(string search, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get genre ");

        var query = _repo.Genre.Where(c => !c.IsCancelled).ToArray();

        if (!string.IsNullOrEmpty(search))
          query = query.Where(c => c.VideoGenre.Contains(search)).ToArray();

        long totalPageSize = query.LongCount();

        if (pageIndex > 0) query = query.OrderByDescending(c => c.CreatedDate).Skip(pageSize).Take(pageIndex * pageSize).ToArray();

        var _query = _mapper.Map<IEnumerable<Genre>, IEnumerable<GenreModel>>(query).ToArray();



        return new Pagination<GenreModel>(_query,
           totalPageSize,
          pageIndex,
          pageSize);
      });
    }

    public Operation<GenreModel[]> GetGenres()
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get Genre ");
        var query = _repo.Genre.Where(s => !s.IsCancelled).ToList();

        var _query = _mapper.Map<IEnumerable<Genre>, IEnumerable<GenreModel>>(query).ToArray();

        return _query;
      });
    }
    public Operation<GenreModel> GetGenre(long id)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get genre by Id {id}");
        var query = _repo.Genre.SingleOrDefault(c => c.Id == id);

        var _query = _mapper.Map<Genre, GenreModel>(query);

        return _query;
      });
    }

    public Operation<GenreModel> AddGenreOrUpdate(GenreModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("Genre cannot be empty");
          throw new Exception("Genre cannot be empty");
        }

        bool validate = model.Validate();
        if (!validate)
        {
          _logger.LogError("Genre ref cannot be empty");
          throw new Exception("Genre ref cannot be empty");
        }

        var query = _repo.Genre.FirstOrDefault(c => c.Id == model.Id);

        if (query == null)
        {
          query = _mapper.Map<GenreModel, Genre>(model);
          _repo.Add<Genre>(query);
          _repo.SaveChanges();
        }
        else
        {

          query.VideoGenre = model.VideoGenre;

          query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
          query.ModifiedDate = DateTime.Now;

          _repo.Update<Genre>(query);
          _repo.SaveChanges();
        }

        return _mapper.Map<Genre, GenreModel>(query);
      });
    }
    public Operation<GenreModel> DeleteGenre(long id)
    {
      return Operation.Create(() =>
      {
        var query = _repo.Genre.Find(id);
        query.IsCancelled = true;

        _repo.Update<Genre>(query);
        _repo.SaveChanges();
        _logger.LogInformation($"Genre has been deleted with Id= {id} ");
        return _mapper.Map<Genre, GenreModel>(query);
      });
    }
    #endregion
  }
}
