using Microsoft.EntityFrameworkCore;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data
{
  public class ShutterCartContext : DbContext
  {

    public ShutterCartContext(DbContextOptions<ShutterCartContext> options) : base(options)
    {
      //Disable initializer
      //Database.SetInitializer<DataEntities>(null);

      //var option = new DbContextOptionsBuilder();
      //option.EnableSensitiveDataLogging(true);
    
    }

    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<Role> Role { get; set; }
    public virtual DbSet<UserRole> UserRole { get; set; }
    public virtual DbSet<SocialLogin> SocialLogin { get; set; }
    public virtual DbSet<Claim> Claim { get; set; }
    public virtual DbSet<Category> Category { get; set; }
    public virtual DbSet<Product> Product { get; set; }
    public virtual DbSet<UserPoint> UserPoint { get; set; }
    public virtual DbSet<Receipt> Receipt { get; set; }
    public virtual DbSet<Advert> Advert { get; set; }
    public virtual DbSet<Questions> Question { get; set; }
    public virtual DbSet<Genre> Genre { get; set; }
    public virtual DbSet<Video> Video { get; set; }
    public virtual DbSet<SurveyQuestion> SurveyQuestion { get; set; }
  }
}
