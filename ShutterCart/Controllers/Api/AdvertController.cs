using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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
  [Route("api/[controller]")]
  public class AdvertController : ApiController
  {

    private readonly ILogger<AdvertController> _logger;
    private readonly IAdvertService _service;
    private readonly IMapper _mapper;
    private readonly UserManager<UserModel> _userManager;
    private readonly IConfiguration _config;
    private readonly IHostingEnvironment _env;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="service"></param>
    /// <param name="logger"></param>
    /// <param name="mapper"></param>
    /// <param name="userManager"></param>
    /// <param name="config"></param>
    /// <param name="env"></param>
    public AdvertController(IAdvertService service, ILogger<AdvertController> logger, IMapper mapper,
      UserManager<UserModel> userManager, IConfiguration config, IHostingEnvironment env)
    {
      _logger = logger;
      _service = service;
      _mapper = mapper;
      _userManager = userManager;
      _config = config;
      _env = env;
    }

    #region advert

    [HttpGet]
    public IActionResult Get()
    {
      _logger.LogInformation("Get advert has been called now");

      var op = _service.GetAdverts();

      return Ok(op);
    }

    [HttpGet("{id}")]
    public IActionResult Get(long id)
    {
      try
      {
        var username = User.Identity.Name;

        _logger.LogInformation("GetOrders has been called now");

        var category = _service.GetAdvert(id);

        return Ok(category);
      }
      catch (Exception ex)
      {
        _logger.LogError($"advert failed to load {ex}");

        return BadRequest($"advert faild to load  {ex}");
      }

    }

    [HttpGet("{PageIndex}/{PageSize}")]
    public IActionResult GetAdvert([FromQuery] SearchModel model)
    {
      var products = _service.GetAdverts(model.Search, model.PageIndex, model.PageSize);

      return Ok(products);
    }

    [HttpPost("file/{id}"), DisableRequestSizeLimit]
    [AllowAnonymous]
    public IActionResult Upload(int id)
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
        string _path = Path.Combine(webRootPath, "assets\\Images");

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
            // var result = _service.UploadFile(fileContent, file.FileName, file.ContentType);

            //Make sure the path to the file exists
            using (var _stream = new FileStream(path, FileMode.Create))
            {
              file.CopyTo(_stream);
            }
            var p = _config["Appurl"] + "Images";

            var op = _service.UpdateImages(Path.Combine(p, fileName), id);

            return Ok(op);
          }
        }
      }
      catch (Exception ex)
      {

        var op = _service.DeleteAdvert(id);

        return Ok(new Operation() { Succeeded = false, Message = "Message not " });
      }

    }

    [HttpPost()]
    public IActionResult Post([FromBody]AdvertModel model)
    {
      if (model != null)
        model.CreatedBy = UserId;

      var op = _service.AddAdvertOrUpdate(model);

      return Ok(op);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      try
      {
        var delete = _service.DeleteAdvert(id);

        if (delete != null) return Ok(delete);
        else
          return NotFound();

      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to delete advert {ex}");

        return BadRequest("Failed to delete advert");
      }
    }

    #endregion
  }
}
