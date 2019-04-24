using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Internal.System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Interfaces;
using shuttercart.Core.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Controllers.Api
{
  [Route("api/[controller]")]
  public class ReceiptController : ApiController
  {
    private readonly ILogger<ReceiptController> _logger;
    private readonly IReceiptService _service;
    private readonly IMapper _mapper;
    private readonly UserManager<UserModel> _userManager;
    private readonly IConfiguration _config;
    private readonly IHostingEnvironment _env;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="env"></param>
    /// <param name="service"></param>
    /// <param name="logger"></param>
    /// <param name="mapper"></param>
    /// <param name="userManager"></param>
    /// <param name="config"></param>
    public ReceiptController(IHostingEnvironment env, IReceiptService service, ILogger<ReceiptController> logger, IMapper mapper, UserManager<UserModel> userManager, IConfiguration config)
    {
      _logger = logger;
      _service = service;
      _mapper = mapper;
      _userManager = userManager;
      _config = config;
      _env = env;
    }

    #region Receipt

    /// <summary>
    /// Get receipt
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public IActionResult Get()
    {

      _logger.LogInformation($"Get receipt has been called now {User.Identity.Name}");

      var receipt = _service.GetReceipts();

      return Ok(receipt);


    }

    /// <summary>
    ///  Get receipt by id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet("{id}")]
    public IActionResult Get(long id)
    {

      _logger.LogInformation($"Get receipt has been called now {User.Identity.Name}");

      var op = _service.GetReceipt(id);

      return Ok(op);

    }

    /// <summary>
    /// Get receipt for user by id 
    /// </summary>
    /// <param name="receiptId"></param>
    /// <returns></returns>
    [HttpGet("user/{userId}")]
    public IActionResult GetReceiptByUserId(long userId)
    {

      var receipt = _service.GetReceiptByUserId(userId);

      return Ok(receipt);
    }

    /// <summary>
    /// Get user by receipt id 
    /// </summary>
    /// <param name="receiptId"></param>
    /// <returns></returns>
    [HttpGet("user-receipt/{receiptId}")]
    public IActionResult GetUserReceiptById([Required]long receiptId)
    {

      var receipt = _service.GetUserReceiptById(receiptId);

      return Ok(receipt);

    }

    /// <summary>
    /// Get receipt  ..
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpGet("{PageIndex}/{PageSize}")]
    public IActionResult GetReceipt([FromQuery] SearchModel model)
    {
      var receipt = _service.GetReceipts(model.Search, model.PageIndex, model.PageSize);

      return Ok(receipt);
    }


    private (string filePath, string contentType, long contentLength) Upload()
    {

      var files = Request.Form.Files;
      var file = files.FirstOrDefault();


      if (file == null || file.Length == 0)
        throw new Exception("file not selected");

      string fileName = Guid.NewGuid().ToString() + "_" + file.FileName;

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
          //return new string[3] { Path.Combine(p, fileName), file.ContentType, file.Length.ToString() };
        }
      }

    }

    /// <summary>
    /// post receipt information ..
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost(), DisableRequestSizeLimit]
    public IActionResult Post([FromForm]ReceiptModel model)
    {
      _logger.LogError($"Failed to save new receipt");
      if (model != null)
      {
        model.CreatedBy = UserId;
        model.ModifiedBy = UserId;
        model.PointValue = long.Parse(_config["PointValue"]);
      }


      Operation.Create(() =>
      {
        (model.FilePath, model.ContentType, model.ContentLength) = Upload();
      });

      var op = _service.AddReceiptOrUpdate(model);

      return Ok(op);
    }

    /// <summary>
    ///  Post user point 
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost("user-point")]
    public IActionResult PostReceiptPoint([FromBody]ReceiptModel model)
    {
      if (model != null)
      {
        model.CreatedBy = UserId;
        model.ModifiedBy = UserId;
        model.PointValue = long.Parse(_config["PointValue"]);
      }


      var op = _service.UpdateReceipt(model);

      return Ok(op);
    }

    /// <summary>
    ///  Delete receipt by user Id 
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      var op = _service.DeleteReceipt(id);

      return Ok(op);
    }
    #endregion
  }
}
