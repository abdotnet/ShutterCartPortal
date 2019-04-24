using System;
using System.Text;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using shuttercart.Data;
using shuttercart.Core.Infrastructures;
using System.IO;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json.Serialization;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging.AzureAppServices.Internal;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Swashbuckle.AspNetCore.Swagger;
using System.Diagnostics;

namespace shuttercart
{
  public class Startup
  {
    private IConfiguration _config;
    private readonly IHostingEnvironment _env;
    //private ILoggerFactory loggerFactory;

    public Startup(IConfiguration config, IHostingEnvironment env)
    {
      _config = config;
      _env = env;
    }
    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddSingleton<IFileProvider>(
       new PhysicalFileProvider(
           Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")));

      services.AddDatabase(_config);
      services.AddApplicationIdentity(_config);

      services.AddSession(options =>
      {
        options.IdleTimeout = TimeSpan.FromMinutes(20); //Regular Asp.Net Default
      });

      services.AddAuthentication(options =>
      {
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

      }).AddCookie()
         .AddJwtBearer(cfg =>
                     {
                       //  cfg.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
                       cfg.TokenValidationParameters = new TokenValidationParameters()
                       {
                         ValidateIssuer = true,
                         ValidateAudience = false,
                         ValidateLifetime = true,
                         ValidateIssuerSigningKey = true,
                         ValidIssuer = _config["Tokens:Issuer"],
                         ValidAudience = _config["Tokens:Audience"],
                         IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"])),
                         ClockSkew = TimeSpan.Zero,
                       };
                       // cfg.IncludeErrorDetails = true;
                       cfg.Events = new JwtBearerEvents
                       {
                         //OnAuthenticationFailed = context =>
                         //{
                         //  Response r = new Response();
                         //}
                       };
                     });

      //add permission enable cross-origin requests (CORS) from angular
      var corsBuilder = new CorsPolicyBuilder();
      corsBuilder.AllowAnyHeader();
      corsBuilder.AllowAnyMethod();
      corsBuilder.AllowAnyOrigin();
      corsBuilder.AllowCredentials();

      services.AddCors(options =>
      {
        options.AddPolicy("AllowAll", corsBuilder.Build());

      });


      services.AddAuthorization(auth =>
      {
        auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
            .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme‌​)
            .RequireAuthenticatedUser().Build());
      });

      services.AddAutoMapper();


      services.AddMvc(opt =>
      {
        // opt.ModelBinderProviders.Insert(0, new UserModelBinderProvider());

        if (_env.IsProduction() && _config["DisableSSL"] != "true")
        {
          // opt.Filters.Add(new RequireHttpsAttribute());
        }

        //var policy = new AuthorizationPolicyBuilder()
        //.RequireAuthenticatedUser()
        //.Build();

        //opt.Filters.Add(new AuthorizeFilter(policy));

      }).AddJsonOptions(opt =>
      {
        opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        opt.SerializerSettings.ContractResolver = new DefaultContractResolver();
        opt.SerializerSettings.SerializationBinder = new DefaultSerializationBinder();
        opt.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;

      });
      services.AddSingleton<IHostingEnvironment>(_env);
      services.AddSingleton<IConfiguration>(_config);

      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new Info
        {
          Version = "v1",
          Title = "NovaCart",
          Description = "A simple system for novacart",
          TermsOfService = "None",
          Contact = new Contact
          {
            Name = "Sholexware Solutions",
            Email = "info@sholexware.com",
            Url = "http://novacart.sholxware.com"
          },
          License = new License
          {
            Name = "Use under novacart",
            Url = "https://novacart.sholxware.com"
          }
        });

        // Set the comments path for the Swagger JSON and UI.
        //var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
        var xmlFile = "swaggerapi.xml";
        Debug.Write(xmlFile);
        var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
        c.IncludeXmlComments(xmlPath);
      });
      //services.AddMvc().AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());
      // Register app services  ..

      services.InitializeAppServices();



    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ShutterCartContext _context, ILoggerFactory loggerFactory)
    {

      loggerFactory.AddConsole(_config.GetSection("Logging"));

      loggerFactory.AddDebug();
      loggerFactory.AddConsole();

      //FileLoggerProvider
      loggerFactory.AddFile("Logs/shuttercart-{Date}.txt");

      // Enable middleware to serve generated Swagger as a JSON endpoint.
      app.UseSwagger();

      // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
      // specifying the Swagger JSON endpoint.

      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "NovaCart");
        c.RoutePrefix = "swagger";
      });

      if (env.IsProduction())
      {
        app.UseDeveloperExceptionPage();
        app.UseBrowserLink();
      }
      else
      {
        app.UseExceptionHandler("/error");
      }

      app.UseExceptionHandler(
           builder =>
           {
             builder.Run(
                  async context =>
                   {
                     context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                     context.Response.Headers.Add("Access-Control-Allow-Origin", "*");

                     var error = context.Features.Get<IExceptionHandlerFeature>();
                     if (error != null)
                     {
                       // context.Response.AddApplicationError(error.Error.Message);
                       await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
                     }
                   });
           });

      //app.UserCorsMiddleWare();

      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseAuthentication();

      //if (env.IsDevelopment())
      //  ShutterCartSeeder.Seed(_context);

      app.UseMvc();

    }
  }
}
