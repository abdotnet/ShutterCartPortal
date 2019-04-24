using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Interfaces;
using shuttercart.Core.Models;
using shuttercart.Data.Entity;

namespace shuttercart.Controllers.Api
{
  [Route("api/report")]
  public class ReportController : ApiController
  {
    private readonly ILogger<ReportController> _logger;
    private readonly IReportService _service;
    private readonly IMapper _mapper;
    private readonly IConfiguration _config;



    public ReportController(IReportService service, ILogger<ReportController> logger, IMapper mapper, IConfiguration config)
    {
      _logger = logger;
      _service = service;
      _mapper = mapper;
      _config = config;

    }

  

    #region reporting  api's


    /// <summary>
    /// Wallet reports
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpGet("{PageIndex}/wallet/{PageSize}")]
    public IActionResult WalletReport([FromQuery] SearchModel model)
    {
      int pointValue = int.Parse(_config["PointValue"]);
      var op = _service.GetWalletPoints(model.Search, model.PageIndex, model.PageSize, pointValue);

      return Ok(op);
    }

    /// <summary>
    /// Share point report 
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpGet("{PageIndex}/sharing/{PageSize}")]
    public IActionResult SharedPointReport([FromQuery] SearchModel model)
    {
      int pointValue = int.Parse(_config["PointValue"]);
      var op = _service.GetChannelPoints( PointChannel.Shared, model.Search, model.PageIndex, model.PageSize, pointValue);

      return Ok(op);
    }
    /// <summary>
    /// Video point report
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpGet("{PageIndex}/video/{PageSize}")]
    public IActionResult VideoPointReport([FromQuery] SearchModel model)
    {
      int pointValue = int.Parse(_config["PointValue"]);
      var op = _service.GetChannelPoints(PointChannel.IsVideoWatched, model.Search, model.PageIndex, model.PageSize, pointValue);

      return Ok(op);
    }
    /// <summary>
    /// product Survey point report 
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpGet("{PageIndex}/survey/{PageSize}")]
    public IActionResult SurveyPointReport([FromQuery] SearchModel model)
    {
      int pointValue = int.Parse(_config["PointValue"]);
      var op = _service.GetChannelPoints(PointChannel.IsProduct, model.Search, model.PageIndex, model.PageSize, pointValue);

      return Ok(op);
    }
    /// <summary>
    /// Receipt point report 
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpGet("{PageIndex}/receipt/{PageSize}")]
    public IActionResult ReceiptPointReport([FromQuery] SearchModel model)
    {
      int pointValue = int.Parse(_config["PointValue"]);

      var op = _service.GetReceipts(model.Search, model.PageIndex, model.PageSize, pointValue);
      return Ok(op);
    }
    /// <summary>
    /// User point report 
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpGet("{PageIndex}/users/{PageSize}")]
    public IActionResult RegisteredReport([FromQuery] SearchModel model)
    {
      var op = _service.GetRegisteredUsers(model.Search, model.PageIndex, model.PageSize);
      return Ok(op);
    }
    #endregion
  }
}
