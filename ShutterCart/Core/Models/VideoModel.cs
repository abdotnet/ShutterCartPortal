using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class VideoModel : Model
  {
    public long Id { get; set; }
    [Required]
    public string Title { get; set; }
    [Required]
    public long GenreId { get; set; }
    public GenreModel Genre { get; set; }
    [Required]
    public string Author { get; set; }
    public long Views { get; set; }
    public string VideoUrl { get; set; }
    public long Points { get; set; }
    public string ThumbNail { get; set; }
  }
  public class GenreModel : Model
  {
    public long Id { get; set; }
    [Required]
    public string VideoGenre { get; set; }
  }

  public class VideoParam
  {
    public long UserId { get; set; }
    public long Point { get; set; }
    public PointChannel Channel { get; set; }
  }
}
