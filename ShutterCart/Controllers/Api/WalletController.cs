using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
  /// <summary>
  /// 
  /// </summary>
  [Route("api/[controller]")]
  public class WalletController : ApiController
  {

    private readonly ILogger<WalletController> _logger;
    private readonly IWalletService _service;
    private readonly IMapper _mapper;
    private readonly UserManager<UserModel> _userManager;
    private readonly IHostingEnvironment _env;
    private readonly IConfiguration _config;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="service"></param>
    /// <param name="logger"></param>
    /// <param name="mapper"></param>
    /// <param name="userManager"></param>
    /// <param name="config"></param>
    /// <param name="env"></param>
    public WalletController(IWalletService service, ILogger<WalletController> logger, IMapper mapper, UserManager<UserModel> userManager, IConfiguration config, IHostingEnvironment env) 
    {
      _logger = logger;
      _service = service;
      _mapper = mapper;
      _userManager = userManager;
      _config = config;
      _env = env;
    }


    #region User point

    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        var username = User.Identity.Name;

        _logger.LogInformation("GetOrders has been called now");
        var op = _service.GetUserPoint();

        return Ok(op);
      }
      catch (Exception ex)
      {
        _logger.LogError($"user point failed to load {ex}");

        return BadRequest($"user point faild to load  {ex}");
      }

    }

    [HttpGet("{id}")]
    public IActionResult Get(long id)
    {
      try
      {

        decimal pointValue = decimal.Parse(_config["PointAmount"]);
        _logger.LogInformation("GetOrders has been called now");

        var op = _service.GetUserPoint(id, pointValue);

        return Ok(op);
      }
      catch (Exception ex)
      {
        _logger.LogError($"user point failed to load {ex}");

        return BadRequest($"user point faild to load  {ex}");
      }

    }
    /// <summary>
    /// Get list of points by user 
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet("user/{id}/points")]
    public IActionResult GetPointsByUser([Required]long id)
    {
      decimal pointValue = decimal.Parse(_config["PointAmount"]);

      var op = _service.GetPointByUser(id, pointValue);

      if (op.Succeeded)
        return Ok(op);
      else
        return BadRequest(op);
    }

    [HttpGet("{PageIndex}/page/{PageSize}")]
    public IActionResult GetUserPoint(SearchModel model)
    {
      var op = _service.GetUserPoint(model.Search, model.PageIndex, model.PageSize);

      return Ok(op);
    }

    [HttpPost("userpoint")]
    public IActionResult Post([FromBody]UserPointModel model)
    {
      try
      {

        model.CreatedBy = UserId;
        model.ModifiedBy = UserId;

        var post = _service.AddOrUpdateUserPoint(model);

        if (post.Succeeded)
        {
          return Ok(post);
        }

      }
      catch (Exception ex)
      {

        _logger.LogError($"Failed to save  user point:{ex}");

      }

      return BadRequest("Failed to save user point");
    }

    [HttpDelete]
    public IActionResult Delete([Required]long id)
    {
      var op = _service.DeleteUserPoint(id);

      return Ok(op);
    }
    [HttpGet("user/{userId}/point-amount")]
    public IActionResult GetUserTotalAmountPoint(long userId)
    {

      var amount = decimal.Parse(_config["PointAmount"]);

      var op = _service.GetAmountPoints(userId, amount);

      return Ok(op);
    }

    #endregion
  }
}
