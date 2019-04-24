using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace shuttercart.Data
{
  public class ShutterCartContextFactory : IDesignTimeDbContextFactory<ShutterCartContext>
  {

    public ShutterCartContext CreateDbContext(string[] args)
    {
      IConfigurationRoot configuration = new ConfigurationBuilder()
       .SetBasePath(Directory.GetCurrentDirectory())
       .AddJsonFile("appsettings.json")
       .Build();

      var builder = new DbContextOptionsBuilder<ShutterCartContext>();
      var connectionString = configuration.GetConnectionString("conString");
      builder.UseSqlServer(connectionString,opt=>opt.CommandTimeout((int)TimeSpan.FromMinutes(10).TotalSeconds));

      return new ShutterCartContext(builder.Options);
    }
  }
}
