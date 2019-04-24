using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Interfaces;
using shuttercart.Core.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Controllers.Api
{
  [Route("api/[controller]")]
  public class VideoController : ApiController
  {
    private readonly ILogger<VideoController> _logger;
    private readonly IVideoServices _service;
    private readonly IMapper _mapper;
    private readonly UserManager<UserModel> _userManager;
    private readonly IConfiguration _config;
    private readonly IHostingEnvironment _env;

    public VideoController(IVideoServices service, ILogger<VideoController> logger, IMapper mapper, UserManager<UserModel> userManager, IConfiguration config, IHostingEnvironment env)
    {
      _logger = logger;
      _service = service;
      _mapper = mapper;
      _userManager = userManager;
      _config = config;
      _env = env;
    }

    #region Video Api

    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        var username = User.Identity.Name;

        //   _logger.LogInformation("GetOrders has been called now");
        var receipt = _service.GetVideos();

        return Ok(receipt);
      }
      catch (Exception ex)
      {
        _logger.LogError($"Video failed to load {ex}");

        return BadRequest($"Video faild to load  {ex}");
      }

    }
    [HttpGet("{id}")]
    public IActionResult Get(long id)
    {
      try
      {
        // var username = User.Identity.Name;

        //   _logger.LogInformation("GetOrders has been called now");

        var receipt = _service.GetVideo(id);

        return Ok(receipt);
      }
      catch (Exception ex)
      {
        _logger.LogError($"Video failed to load {ex}");

        return BadRequest($"Video faild to load  {ex}");
      }

    }

    [HttpGet("{PageIndex}/{PageSize}")]
    public IActionResult GetVideo([FromQuery] SearchModel model)
    {
      var products = _service.GetVideos(model.Search, model.PageIndex, model.PageSize);

      return Ok(products);
    }

    [HttpPost("file/{videoId}"), DisableRequestSizeLimit]
    [AllowAnonymous]
    public IActionResult Upload(int videoId)
    {
      var files = Request.Form.Files;
      var _file = files.FirstOrDefault();

      if (_file == null || _file.Length == 0)
        return Content("file not selected");

      string fileName = string.Empty;
      string webRootPath = string.Empty;
      string _path = string.Empty;
      string path = string.Empty;
      string configPath = string.Empty;

      int counter = 0;

      foreach (var file in files)
      {
        fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
        //string fileName = file.FileName;
        webRootPath = _env.WebRootPath;
        if (fileName.Contains(".jpg") || fileName.Contains(".jpeg") || fileName.Contains(".gif") || fileName.Contains(".png"))
        {
          _path = Path.Combine(webRootPath, "assets\\Images");
        }
        else
          _path = Path.Combine(webRootPath, "assets\\Videos");

        path = Path.Combine(_path, fileName);

        if (!System.IO.Directory.Exists(_path))
        {
          System.IO.Directory.CreateDirectory(_path);

          if (!System.IO.File.Exists(path))
          {
            System.IO.File.Create(path);
          }
        }

        configPath = _config["Appurl"];

        using (Stream stream = file.OpenReadStream())
        {
          using (var binaryReader = new BinaryReader(stream))
          {
            var fileContent = binaryReader.ReadBytes((int)file.Length);

            // Make sure the path to the file exists
            using (var _stream = new FileStream(path, FileMode.Create))
            {
              file.CopyTo(_stream);
            }

            if (fileName.Contains(".jpg") || fileName.Contains(".jpeg") || fileName.Contains(".gif") || fileName.Contains(".png"))
            {
              configPath = $"{configPath}Images";
            }
            else
            {
              configPath = $"{configPath}videos";
            }

            var op = _service.UpdateVideo(Path.Combine(configPath, fileName), videoId);

            if (op.Succeeded) counter++;
          }
        }
      }

      var _op = new Operation() { Succeeded = true };
      return Ok(_op);

    }
    [NonAction]
    public static void Copy(string inputFilePath, string outputFilePath)
    {
      int bufferSize = 1024 * 1024;

      using (FileStream fileStream = new FileStream(outputFilePath, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
      //using (FileStream fs = File.Open(<file-path>, FileMode.Open, FileAccess.Read, FileShare.Read))
      {
        FileStream fs = new FileStream(inputFilePath, FileMode.Open, FileAccess.ReadWrite);
        fileStream.SetLength(fs.Length);
        int bytesRead = -1;
        byte[] bytes = new byte[bufferSize];

        while ((bytesRead = fs.Read(bytes, 0, bufferSize)) > 0)
        {
          fileStream.Write(bytes, 0, bytesRead);
        }
      }
    }

    [HttpPost("upload")]

    public IActionResult PostVideo([FromBody]VideoModel model)
    {
      try
      {

        model.CreatedBy = UserId; // GetCurrentUserId().Result;
        model.ModifiedBy = UserId;
        string newVideoName = string.Empty;
        string newImageName = string.Empty;

        string webRootPath = _env.WebRootPath;
        string _path = Path.Combine(webRootPath, "assets\\Videos");
        string _pathImage = Path.Combine(webRootPath, "assets\\Images");

        if (!string.IsNullOrEmpty(model.VideoUrl))
        {
          newVideoName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(model.VideoUrl);
          _path = Path.Combine(_path, newVideoName);
        }
        if (!string.IsNullOrEmpty(model.ThumbNail))
        {

          newImageName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(model.ThumbNail);
          _pathImage = Path.Combine(_pathImage, newImageName);
        }


        var op = _service.AddVideoOrUpdate(model);

        if (op.Succeeded)
        {


          return Ok(op);
        }
        else
        {
          return BadRequest(op);
        }
      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to save new Video:{ex}");
      }

      return BadRequest("Failed to save Video");
    }


    /// <summary>
    ///  Post from mobile ..
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost("upload-mobile")]

    public IActionResult PostVideoFromMobile([FromBody]VideoModel model)
    {
      try
      {

        model.CreatedBy = UserId; // GetCurrentUserId().Result;
        model.ModifiedBy = UserId;
        string newVideoName = string.Empty;
        string newImageName = string.Empty;

        string webRootPath = _env.WebRootPath;
        string _path = Path.Combine(webRootPath, "assets\\Videos");
        string _pathImage = Path.Combine(webRootPath, "assets\\Images");
        //  System.IO.File.Copy(model.VideoUrl, _path);

        if (!string.IsNullOrEmpty(model.VideoUrl))
        {
          newVideoName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(model.VideoUrl);
          _path = Path.Combine(_path, newVideoName);
        }
        if (!string.IsNullOrEmpty(model.ThumbNail))
        {

          newImageName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(model.ThumbNail);
          _pathImage = Path.Combine(_pathImage, newImageName);
        }

        using (var webclient = new WebClient())
        {
          if (!string.IsNullOrEmpty(model.VideoUrl))
            webclient.DownloadFile(model.VideoUrl, _path);

          if (!string.IsNullOrEmpty(model.ThumbNail))
            webclient.DownloadFile(model.ThumbNail, _pathImage);
        }

        string _v = $"http://shuttercart.sholexware.com//assets//Videos//" + newVideoName;
        string __v = $"http://localhost:35531//assets//Videos//" + newVideoName;

        string _im = $"http://shuttercart.sholexware.com//assets//Images//" + newImageName;
        string __im = $"http://localhost:35531//assets//Images//" + newImageName;

        if (!string.IsNullOrEmpty(newVideoName))
          model.VideoUrl = _v;

        if (!string.IsNullOrEmpty(newImageName))
          model.ThumbNail = _im;

        var post = _service.AddVideoOrUpdate(model);

        if (post.Succeeded)
        {


          return Created($"/api/video/{post.Result.Id}", post.Result);
        }
        else
        {
          return BadRequest(post.Message);
        }
      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to save new Video:{ex}");
      }

      return BadRequest("Failed to save Video");
    }

    [HttpPost()]

    public IActionResult Post([FromBody]VideoModel model)
    {
      try
      {

        model.CreatedBy = UserId; // GetCurrentUserId().Result;
        model.ModifiedBy = UserId;

        var op = _service.AddVideoOrUpdate(model);

        if (op.Succeeded)
        {
          return Ok(op);
        }
        else
        {
          return BadRequest(op);
        }
      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to save new Video:{ex}");
      }

      return BadRequest("Failed to save Video");
    }

    [HttpDelete("{id}")]

    public IActionResult Delete(int id)
    {
      try
      {
        var delete = _service.DeleteVideo(id);

        if (delete != null) return Ok(delete);
        else
          return NotFound();

      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to delete Video {ex}");

        return BadRequest("Failed to delete Video");
      }
    }

    [HttpPost("watched-point")]
    public IActionResult AddPointToVideoWatched([FromBody]VideoParam model)
    {
      var op = _service.AddWatchedVideoPoint(model);
      return Ok(op);
    }

    #endregion


    #region Genre Api

    [HttpGet("genre")]
    public IActionResult GetGenre()
    {
      try
      {
        var username = User.Identity.Name;

        //   _logger.LogInformation("GetOrders has been called now");
        var receipt = _service.GetGenres();

        return Ok(receipt);
      }
      catch (Exception ex)
      {
        _logger.LogError($"Genre failed to load {ex}");

        return BadRequest($"Genre faild to load  {ex}");
      }

    }
    [HttpGet("genre/{id}")]
    public IActionResult GetGenre(long id)
    {
      try
      {
        // var username = User.Identity.Name;

        //   _logger.LogInformation("GetOrders has been called now");

        var receipt = _service.GetGenre(id);

        return Ok(receipt);
      }
      catch (Exception ex)
      {
        _logger.LogError($"Genre failed to load {ex}");

        return BadRequest($"Genre faild to load  {ex}");
      }

    }


    [HttpGet("genre/{PageIndex}/{PageSize}")]
    public IActionResult GetGenre([FromQuery] SearchModel model)
    {
      var products = _service.GetGenre(model.Search, model.PageIndex, model.PageSize);

      return Ok(products);
    }


    [HttpPost("genre")]
    public IActionResult PostGenre([FromBody]GenreModel model)
    {
      try
      {

        model.CreatedBy = UserId; // GetCurrentUserId().Result;
        model.ModifiedBy = UserId;

        var op = _service.AddGenreOrUpdate(model);

        if (op.Succeeded)
        {
          return Ok(op);
        }
        else
        {
          return BadRequest(op);
        }
      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to save new Genre:{ex}");
      }

      return BadRequest("Failed to save Genre");
    }

    [HttpDelete("genre/{id}")]
    public IActionResult DeleteGenre(int id)
    {
      try
      {
        var delete = _service.DeleteGenre(id);

        if (delete != null) return Ok(delete);
        else
          return NotFound();

      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to delete Genre {ex}");

        return BadRequest("Failed to delete Genre");
      }
    }

#endregion

  }
}
