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
  public class DashboardController : ApiController
  {

    private readonly ILogger<DashboardController> _logger;
    private readonly IDashboardService _service;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="service"></param>
    /// <param name="logger"></param>
    public DashboardController(IDashboardService service, ILogger<DashboardController> logger)
    {
      _logger = logger;
      _service = service;
    }

    [HttpGet]
    public IActionResult Get()
    {
      var op = _service.GetDahboard();
      return Ok(op);
    }
  }
}
