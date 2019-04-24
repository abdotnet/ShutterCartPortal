using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Interfaces;
using shuttercart.Core.Models;


namespace shuttercart.Controllers.Api
{
  /// <summary>
  /// Product controller  ...
  /// </summary>
  [Route("api/[controller]")]
  public class ProductController : ApiController
  {
    private readonly ILogger<ProductController> _logger;
    private readonly IProductService _service;
    private readonly IMapper _mapper;
    private readonly UserManager<UserModel> _userManager;
    private readonly IHostingEnvironment _env;
    private readonly IConfiguration _config;


    /// <summary>
    /// 
    /// </summary>
    /// <param name="service"></param>
    /// <param name="logger"></param>
    /// <param name="userManager"></param>
    /// <param name="mapper"></param>
    /// <param name="env"></param>
    /// <param name="config"></param>
    public ProductController(IProductService service, ILogger<ProductController> logger, UserManager<UserModel> userManager, IMapper mapper, IHostingEnvironment env, IConfiguration config)
    {
      _mapper = mapper;
      _userManager = userManager;
      _logger = logger;
      _service = service;
      _env = env;
      _config = config;
    }


    #region product

    /// <summary>
    /// Get products
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public IActionResult Get()
    {

      _logger.LogInformation("Get product has been called now");

      var products = _service.GetProducts();

      return Ok(products);
    }
    /// <summary>
    ///  Get Products
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet("{id}")]
    public IActionResult Get([Required]long id)
    {
      _logger.LogInformation($"Get products by {id}");

      var op = _service.GetProduct(id);

      return Ok(op);
    }
    /// <summary>
    /// Get product by category id
    /// </summary>
    /// <param name="categoryId"></param>
    /// <returns></returns>
    [HttpGet("category/{id}/products")]
    public IActionResult GetProductByCategory([Required]long categoryId)
    {
      var op = _service.GetCategoryProduct(categoryId);

      return Ok(op);
    }

    /// <summary>
    /// Get products by paging ...
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpGet("{PageIndex}/page/{PageSize}")]
    public IActionResult GetProducts(SearchModel model)
    {
      var products = _service.GetProducts(model.Search, model.PageIndex, model.PageSize);

      return Ok(products);
    }

    /// <summary>
    /// Upload product image ..
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpPost("file/{id}"), DisableRequestSizeLimit]
    [AllowAnonymous]
    public IActionResult Upload([Required]long id)
    {
      var op = UploadFile(id);

      return Ok(op);
    }

    private Operation UploadFile(long id)
    {

      try
      {
        var files = Request.Form.Files;
        var file = files.FirstOrDefault();

        if (file == null || file.Length == 0)
          throw new Exception("File not found");

        string fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
        //string fileName = file.FileName;
        string webRootPath = _env.WebRootPath;
        string _path = Path.Combine(
                           webRootPath, "assets\\Images");
        string path = Path.Combine(_path, fileName);

        if (!System.IO.Directory.Exists(_path))
        {
          System.IO.Directory.CreateDirectory(_path);

          if (!System.IO.File.Exists(path))
          {
            System.IO.File.Create(path);
          }
        }

        using (Stream stream = file.OpenReadStream())
        {
          using (var binaryReader = new BinaryReader(stream))
          {
            var fileContent = binaryReader.ReadBytes((int)file.Length);
            var result = _service.UploadFile(fileContent, file.FileName, file.ContentType);

            //Make sure the path to the file exists
            using (var _stream = new FileStream(path, FileMode.Create))
            {
              file.CopyTo(_stream);
            }
            var p = _config["Appurl"] + "Images";

            var op = _service.UpdateImages(Path.Combine(p, fileName), id);

            return op;
          }
        }
      }
      catch (Exception ex)
      {

        var op = _service.DeleteProduct(id);
        return new Operation() { Succeeded = false, Message = "Operation failed, please reupload file" };
      }



    }

    /// <summary>
    /// Upload file  ..
    /// </summary>
    /// <param name="file"></param>
    /// <returns></returns>
    [HttpPost("file")]
    [AllowAnonymous]
    public async Task<IActionResult> UploadAsync(IFormFile file)
    {
      if (file == null || file.Length == 0)
        return Content("file not selected");

      var path = Path.Combine(
                         Directory.GetCurrentDirectory(), "wwwroot",
                         file.FileName);


      using (var stream = new FileStream(path, FileMode.Create))
      {
        await file.CopyToAsync(stream);
      }

      return Ok(1);
    }

    [NonAction]
    public async Task<IActionResult> Download(string filename)
    {
      if (filename == null)
        return Content("filename not present");

      var path = Path.Combine(
                     Directory.GetCurrentDirectory(),
                     "wwwroot", filename);

      var memory = new MemoryStream();
      using (var stream = new FileStream(path, FileMode.Open))
      {
        await stream.CopyToAsync(memory);
      }
      memory.Position = 0;
      return File(memory, GetContentType(path), Path.GetFileName(path));
    }

    /// <summary>
    ///  Create product manager  ..
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost]
    public IActionResult Post([FromBody]ProductModel model)
    {

      if (model != null)
        model.CreatedBy = UserId;

      var post = _service.AddProductOrUpdate(model);

      return Ok(post);

    }

    /// <summary>
    ///  Delete id 
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      var op = _service.DeleteProduct(id);

      return Ok(op);
    }

    private string GetContentType(string path)
    {
      var types = GetMimeTypes();
      var ext = Path.GetExtension(path).ToLowerInvariant();
      return types[ext];
    }

    private Dictionary<string, string> GetMimeTypes()
    {
      return new Dictionary<string, string>
            {
                {".txt", "text/plain"},
                {".pdf", "application/pdf"},
                {".doc", "application/vnd.ms-word"},
                {".docx", "application/vnd.ms-word"},
                {".xls", "application/vnd.ms-excel"},
                {".xlsx", "application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet"},
                {".png", "image/png"},
                {".jpg", "image/jpeg"},
                {".jpeg", "image/jpeg"},
                {".gif", "image/gif"},
                {".csv", "text/csv"}
            };
    }

    #endregion
  }
}
