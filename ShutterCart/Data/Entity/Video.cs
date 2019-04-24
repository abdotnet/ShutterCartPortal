using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data.Entity
{
  public class Video : BaseEntity
  {
    public long Id { get; set; }
    public string Title { get; set; }
    public long GenreId { get; set; }
    [ForeignKey("GenreId")]
    public Genre Genre { get; set; }
    public string Author { get; set; }
    public long Views { get; set; }
    public string VideoUrl { get; set; }
    public long Points { get; set; }
    public string  ThumbNail { get; set; }
  }
  public class Genre : BaseEntity
  {
    public long Id { get; set; }
    public string VideoGenre { get; set; }
  }
}
