using shuttercart.Core.Infrastructures;
using shuttercart.Core.Models;
using System;

namespace shuttercart.Core.Interfaces
{
  public interface IQuestionService
  {
    Operation<Pagination<QuestionModel>> GetQuestions(string search, long userId, int pageIndex, int pageSize = 100);
    Operation<QuestionModel[]> GetQuestions(int userId);
    Operation<QuestionModel> GetQuestion(long id);
    Operation<QuestionModel> AddQuestionOrUpdate(QuestionModel model);
    Operation<QuestionModel> DeleteQuestion(long id);
    Operation<SurveyResponseModel> AddSurveyQuestions(SurveyResponseModel model);
    Operation<QuestionModel[]> GetAllQuestions();
  }
}
