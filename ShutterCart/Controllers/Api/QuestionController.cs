using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

namespace shuttercart.Controllers.Api
{
  [Route("api/[controller]")]
  public class QuestionController : ApiController
  {

    private readonly ILogger<QuestionController> _logger;
    private readonly IQuestionService _service;
    private readonly IMapper _mapper;
    private readonly UserManager<UserModel> _userManager;
    private readonly IConfiguration _config;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="service"></param>
    /// <param name="logger"></param>
    /// <param name="mapper"></param>
    /// <param name="userManager"></param>
    /// <param name="config"></param>
    public QuestionController(IQuestionService service, ILogger<QuestionController> logger, IMapper mapper, UserManager<UserModel> userManager, IConfiguration config)
    {
      _logger = logger;
      _service = service;
      _mapper = mapper;
      _userManager = userManager;
      _config = config;
    }

    #region Question
    [HttpGet]
    public IActionResult Get()
    {

      _logger.LogInformation("Get question has been called now");

      var question = _service.GetAllQuestions();

      return Ok(question);


    }

    [HttpGet("{id}")]
    public IActionResult Get(long id)
    {
      _logger.LogInformation("Get question  has been called now");

      var questions = _service.GetQuestion(id);

      return Ok(questions);

    }

    [HttpGet("{PageIndex}/{PageSize}")]
    public IActionResult GetQuestions(SearchModel model)
    {
      var question = _service.GetQuestions(model.Search, UserId, model.PageIndex, model.PageSize);

      return Ok(question);
    }

    [HttpPost]

    public IActionResult Post([FromBody]QuestionModel model)
    {

      if (model != null)
      {
        model.CreatedBy = UserId;
        model.ModifiedBy = UserId;
      }

      var op = _service.AddQuestionOrUpdate(model);

      return Ok(op);

    }

    [HttpDelete("{id}")]

    public IActionResult Delete([Required]int id)
    {
      try
      {
        var delete = _service.DeleteQuestion(id);

        if (delete != null) return Ok(delete);
        else
          return NotFound();

      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to delete question {ex}");

        return BadRequest("Failed to delete question");
      }
    }

    [HttpPost("answer")]

    public IActionResult SubmitAnswer([FromBody]SurveyResponseModel model)
    {
      var op = _service.AddSurveyQuestions(model);

      return Ok(op);
    }

    [HttpGet("{userId}/filter")]
    public IActionResult GetFilteredQuestion([Required]int userId)
    {
      var op = _service.GetQuestions(userId);
      return Ok(op);
    }

    #endregion
  }
}

