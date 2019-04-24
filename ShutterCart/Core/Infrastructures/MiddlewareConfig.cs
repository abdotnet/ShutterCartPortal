using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using shuttercart.Core.Interfaces;
using shuttercart.Core.Services;
using shuttercart.Core.Models;
using shuttercart.Data;
using shuttercart.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Infrastructures
{
  public static class MiddlewareConfig
  {
    public static void AddDatabase(this IServiceCollection services, IConfiguration _config)
    {
      var connectionString = _config.GetConnectionString("conString");

      MigrateAssembly();

      services.AddDbContextPool<ShutterCartContext>(options => options.UseSqlServer(connectionString));

      //Add Scoped  ShutterCart ... 
      services.AddScoped<DbContext, ShutterCartContext>();
      services.AddTransient<IUserRepository, UserRepository>();

    }

    private static void MigrateAssembly()
    {
      var migrationAssembly = typeof(ShutterCartContext).GetTypeInfo().Assembly.GetName().Name;
    }

    // Application Identity configuration ..
    public static void AddApplicationIdentity(this IServiceCollection services, IConfiguration config)
    {
      services.AddIdentity<UserModel, string>(o =>
      {
        // configure identity options
        o.Password.RequireDigit = false;
        o.Password.RequireLowercase = false;
        o.Password.RequireUppercase = false;
        o.Password.RequireNonAlphanumeric = false;
        o.Password.RequiredLength = 6;



      }).AddDefaultTokenProviders();




    }

    public static void InitializeAppServices(this IServiceCollection services)
    {

      // User store & roles  .. 
      services.AddScoped<IUserStore<UserModel>, UserStore>();
      services.AddScoped<IRoleStore<string>, RoleStore>();

      // Add transient app services  items

      services.AddTransient<IProductService, ProductService>();
      services.AddTransient<ICategoryService, CategoryService>();
      services.AddTransient<IAdvertService, AdvertService>();
      services.AddTransient<IQuestionService, QuestionService>();
      services.AddTransient<IReceiptService, ReceiptService>();
      services.AddTransient<IVideoServices, VideoServices>();
      services.AddTransient<IUserPointService, UserPointService>();
      services.AddTransient<IWalletService, WalletService>();
      services.AddTransient<IReportService, ReportService>();
      services.AddTransient<IDashboardService, DashboardService>();
    }

    public static void Initializedb(this IApplicationBuilder app, IHostingEnvironment env)
    {

      if (env.IsDevelopment())
      {
        //using (var scope = app.ApplicationServices.CreateScope())
        //{
        //  var seeder = scope.ServiceProvider.GetService<ShutterCartSeeder>();

        //  seeder.Seed().Wait();
        //}
      }


    }
  }
}
