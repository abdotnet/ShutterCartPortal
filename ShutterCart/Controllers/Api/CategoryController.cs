using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Models;
using shuttercart.Core.Services;

namespace shuttercart.Controllers.Api
{
  /// <summary>
  /// Category controller ...
  /// </summary>
  [Route("api/[controller]")]
  public class CategoryController : ApiController
  {

    private readonly ILogger<CategoryController> _logger;
    private readonly ICategoryService _service;
    private readonly IMapper _mapper;
    private readonly UserManager<UserModel> _userManager;
    private readonly IConfiguration _config;
    private readonly IHostingEnvironment _env;

    /// <summary>
    /// Category controller 
    /// </summary>
    /// <param name="env"></param>
    /// <param name="service"></param>
    /// <param name="logger"></param>
    /// <param name="mapper"></param>
    /// <param name="userManager"></param>
    /// <param name="config"></param>
    public CategoryController(IHostingEnvironment env, ICategoryService service, ILogger<CategoryController> logger, IMapper mapper, UserManager<UserModel> userManager, IConfiguration config)
    {
      _logger = logger;
      _service = service;
      _mapper = mapper;
      _userManager = userManager;
      _config = config;
      _env = env;
    }

    #region category
    /// <summary>
    /// Get category  ..
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public IActionResult Get()
    {
      _logger.LogInformation("Get all categories");
      var op = _service.GetCategories();

      return Ok(op);
    }

    /// <summary>
    /// Get category by Id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet("{id}")]
    public IActionResult Get([Required]long id)
    {
      _logger.LogInformation($"Get category by {id}");

      var category = _service.GetCategory(id);

      return Ok(category);

    }

    /// <summary>
    /// Get category with pagination.
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpGet("{PageIndex}/{PageSize}")]
    public IActionResult GetCategory(SearchModel model)
    {
      _logger.LogInformation($"Get category by paging {model.PageIndex} {model.PageSize}");

      var op = _service.GetCategories(model.Search, model.PageIndex, model.PageSize);

      return Ok(op);
    }

    private (string filePath, string contentType, long contentLength) Upload()
    {

      var files = Request.Form.Files;
      var file = files.FirstOrDefault();

      // ref string filePath, ref long contentLength, ref string contentType

      if (file == null || file.Length == 0)
        throw new Exception("file not selected");

      string fileName = Guid.NewGuid().ToString() + "_" + file.FileName;

      //string fileName = file.FileName;
      string webRootPath = _env.WebRootPath;
      string _path = Path.Combine(
                         webRootPath, "assets\\Images");

      string path = Path.Combine(_path, fileName);

      if (!System.IO.Directory.Exists(_path))
        System.IO.Directory.CreateDirectory(_path);

      using (Stream stream = file.OpenReadStream())
      {
        using (var binaryReader = new BinaryReader(stream))
        {
          var fileContent = binaryReader.ReadBytes((int)file.Length);

          if (string.IsNullOrEmpty(path)) throw new Exception("Path to file destination not found");

          // Make sure the path to the file exists
          using (var _stream = new FileStream(path, FileMode.Create))
          {
            file.CopyTo(_stream);
          }
          var p = _config["Appurl"] + "Images";

          // var op = _service.UpdateImages(Path.Combine(p, fileName), id);

          return (Path.Combine(p, fileName), file.ContentType, file.Length);
          // return new string[3] { Path.Combine(p, fileName), file.ContentType, file.Length.ToString() };
        }
      }

    }

    /// <summary>
    /// Upload file with Id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpPost("file/{id}"), DisableRequestSizeLimit]
    [AllowAnonymous]
    public IActionResult Upload(long id)
    {
      try
      {
        if (Request.Form.Files.Count <= 0 || Request.Form.Files.FirstOrDefault().Length == 0)
        {
          var op = _service.DeleteCategoryItem(id);

          var _op = new Operation();

          _op.Succeeded = false;
          _op.Message = "Operation failed,Image not uploaded";

          return Ok(_op);
        }

        var files = Request.Form.Files;
        var file = files.FirstOrDefault();

        if (file == null || file.Length == 0)
        {
          var op = _service.DeleteCategory(id);

          var _op = new Operation();
          _op.Succeeded = false;
          _op.Message = "Operation failed,Image not uploaded";

          return Ok(_op);
        }
        // return Content("file not selected");

        string fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
        //string fileName = file.FileName;
        string webRootPath = _env.WebRootPath;

        string _path = Path.Combine(
                           webRootPath, "assets\\Images");

        string path = Path.Combine(_path, fileName);

        if (!System.IO.Directory.Exists(_path))
        {
          System.IO.Directory.CreateDirectory(_path);

          //if (!System.IO.File.Exists(path))
          //{
          //  System.IO.File.Create(path);
          //}
        }

        using (Stream stream = file.OpenReadStream())
        {
          using (var binaryReader = new BinaryReader(stream))
          {
            var fileContent = binaryReader.ReadBytes((int)file.Length);
            // var result = _service.UploadFile(fileContent, file.FileName, file.ContentType);

            // Make sure the path to the file exists
            using (var _stream = new FileStream(path, FileMode.Create))
            {
              file.CopyTo(_stream);
            }
            var p = _config["Appurl"] + "Images";

            var model = new CategoryModel();
            model.CategoryId = id;
            model.Icon = Path.Combine(p, fileName);
            model.ContentLength = file.Length;
            model.ContentType = file.ContentType;


            var op = _service.UpdateCategory(model);

            return Ok(op);

          }
        }
      }
      catch (Exception ex)
      {
        var op = _service.DeleteCategoryItem(id);
        var _op = new Operation();

        _op.Succeeded = false;
        _op.Message = "Operation failed,Image not uploaded";

        return Ok(_op);
      }
      finally
      {
      

      }

    }

    /// <summary>
    /// Post category model
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    public IActionResult Post([FromBody]CategoryModel model)
    {
      if (model != null)
        model.CreatedBy = UserId;

      _logger.LogError($"Category posting module");

      var op = _service.AddCategoryOrUpdate(model);

      return Ok(op);
    }
    /// <summary>
    /// Delete category  by Id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete("{id}")]
    public IActionResult DeleteCategory(int id)
    {
      var op = _service.DeleteCategory(id);

      return Ok(op);
    }

    #endregion
  }
}
