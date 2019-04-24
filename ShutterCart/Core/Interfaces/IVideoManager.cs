using shuttercart.Core.Infrastructures;
using shuttercart.Core.Models;
using System;

namespace shuttercart.Core.Interfaces
{
  public interface IVideoServices
  {
    Operation<Pagination<VideoModel>> GetVideos(string search, int pageIndex, int pageSize = 100);
    Operation<VideoModel[]> GetVideos();
    Operation<VideoModel> GetVideo(long id);
    Operation<VideoModel> AddVideoOrUpdate(VideoModel model);
    Operation<VideoModel> DeleteVideo(long id);
    Operation AddWatchedVideoPoint(VideoParam model);


    Operation<Pagination<GenreModel>> GetGenre(string search, int pageIndex, int pageSize = 100);
    Operation<GenreModel[]> GetGenres();
    Operation<GenreModel> GetGenre(long id);
    Operation<GenreModel> AddGenreOrUpdate(GenreModel model);
    Operation<GenreModel> DeleteGenre(long id);
    Operation UpdateVideo(string fileName, int videoId);
  }
}
