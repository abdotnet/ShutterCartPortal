using AutoMapper;
using AutoMapper.Configuration;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Infrastructures;
using shuttercart.Core.Interfaces;
using shuttercart.Core.Models;
using shuttercart.Data;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Services
{
  public class QuestionService : IQuestionService
  {
    private readonly ILogger<QuestionService> _logger;
    private readonly ShutterCartContext _repo;
    private readonly IMapper _mapper;
    private readonly IUserPointService _userPoint;

    public QuestionService(ILogger<QuestionService> logger, ShutterCartContext repo, IMapper mapper, IUserPointService userPoint)
    {
      _logger = logger;
      _repo = repo;
      _mapper = mapper;
      _userPoint = userPoint;
    }

    #region Question details

    public Operation<QuestionModel[]> GetAllQuestions()
    {
      return Operation.Create(() =>
      {

        var query = _repo.Question.Where(s => !s.IsCancelled).ToList();

        var question = _mapper.Map<IEnumerable<Questions>, IEnumerable<QuestionModel>>(query).OrderByDescending(c => c.Id).ToArray();

        return question;
      });
    }
    public Operation<Pagination<QuestionModel>> GetQuestions(string search, long userId, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get question ");

        var query = _repo.Question.Where(s => !s.IsCancelled).ToList();

        var q_ansers = _repo.SurveyQuestion.Where(c => c.UserId == userId && !c.IsCancelled).ToList();


        Questions[] GetFilteredQuestion(List<Questions> questions, List<SurveyQuestion> survey)
        {
          var lstQue = new List<Questions>();

          questions.ForEach(c =>
          {
            if (survey.FirstOrDefault(s => s.QuestionId == c.Id) == null)
              lstQue.Add(c);
          });
          return lstQue.ToArray();
        }

        query = GetFilteredQuestion(query, q_ansers).ToList();

        if (!string.IsNullOrEmpty(search))
          query = query.Where(c => c.Question.Contains(search)).ToList();

        long totalCount = query.LongCount();
        if (pageIndex > 0) query = query.Skip(pageSize).Take(pageIndex * pageSize).ToList();

        var question = _mapper.Map<IEnumerable<Questions>, IEnumerable<QuestionModel>>(query).OrderByDescending(c => c.Id).ToArray();

        return new Pagination<QuestionModel>(question, totalCount, pageSize, pageIndex);

      });
    }

    /// <summary>
    /// Filter questions ...
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    public Operation<QuestionModel[]> GetQuestions(int userId)
    {
      return Operation.Create(() =>
      {
        if (userId <= 0)
          throw new Exception("User not found ");


        _logger.LogInformation("I am currently @ the filter question by Id ");

        var query = _repo.Question.Where(s => !s.IsCancelled).ToList();

        var q_anwsers = _repo.SurveyQuestion.Where(c => c.UserId == userId && !c.IsCancelled).ToList();


        Questions[] GetFilteredQuestion(List<Questions> questions, List<SurveyQuestion> survey)
        {
          var lstQue = new List<Questions>();

          questions.ForEach(c =>
          {
            var que = survey.FirstOrDefault(s => s.QuestionId == c.Id);
            if (que == null) // if question 
              lstQue.Add(c);

          });
          return lstQue.ToArray();
        }
        var que_model = GetFilteredQuestion(query, q_anwsers);

        var _query = _mapper.Map<IEnumerable<Questions>, IEnumerable<QuestionModel>>(que_model).OrderByDescending(c => c.Id).ToArray();

        return _query;
      });
    }
    public Operation<QuestionModel> GetQuestion(long id)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently get question by Id {id}");

        var query = _repo.Question.SingleOrDefault(c => c.Id == id && !c.IsCancelled);

        if (query == null) throw new Exception("Question not found");

        var _query = _mapper.Map<Questions, QuestionModel>(query);

        return _query;
      });
    }

    public Operation<QuestionModel> AddQuestionOrUpdate(QuestionModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("Question cannot be empty");
          throw new Exception("Question cannot be empty");
        }

        bool validate = model.Validate();
        if (!validate)
        {
          _logger.LogError("Question  cannot be empty");
          throw new Exception("Question  cannot be empty");
        }

        var query = _repo.Question.FirstOrDefault(c => c.Id == model.Id);

        if (query == null)
        {
          query = _mapper.Map<QuestionModel, Questions>(model);
          _repo.Add<Questions>(query);
          _repo.SaveChanges();
        }
        else
        {
          query.Question = model.Question;
          query.OptionA = model.OptionA;
          query.OptionB = model.OptionB;
          query.OptionC = model.OptionC;
          query.OptionD = model.OptionD;
          query.Answer = model.Answer;

          query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
          query.ModifiedDate = DateTime.Now;

          _repo.Update<Questions>(query);
          _repo.SaveChanges();
        }

        return _mapper.Map<Questions, QuestionModel>(query);
      });
    }
    public Operation<QuestionModel> DeleteQuestion(long id)
    {
      return Operation.Create(() =>
      {
        var query = _repo.Question.FirstOrDefault(c => c.Id == id);
        query.IsCancelled = true;

        _repo.Update<Questions>(query);
        _repo.SaveChanges();
        _logger.LogInformation($"Question has been deleted with Id= {id} ");
        return _mapper.Map<Questions, QuestionModel>(query);
      });
    }

    #endregion

    #region Survey Questions
    public Operation<SurveyResponseModel> AddSurveyQuestions(SurveyResponseModel model)
    {
      return Operation.Create(() =>
      {

        if (model == null)
          throw new Exception("Answered question model cannot be  empty");

        model.Validate();

        model.SurveyAnswer.ToList().ForEach(m =>
        {
          m.Validate();

          var entity = new SurveyQuestion()
          {
            AnswerSelected = m.SelectedAnswer,
            QuestionId = m.QuestionId,
            UserId = model.UserId,
            Score = m.Score
          };
          _repo.Add<SurveyQuestion>(entity);
        });

        _userPoint.AddUserPointOrUpdate(new UserPointModel()
        {
          UserId = model.UserId,
          Channel = PointChannel.IsQuestion,
          Point = model.Point,
          //QuestionId = model
        });

        _repo.SaveChanges();
        return model;
      });
    }


    #endregion
  }
}

