using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class QuestionModel : Model
  {
    public long Id { get; set; }
    [Required]
    public string Question { get; set; }
    [Required]
    public string Answer { get; set; }
    [Required]
    public string OptionA { get; set; }
    [Required]
    public string OptionB { get; set; }
    [Required]
    public string OptionC { get; set; }
    [Required]
    public string OptionD { get; set; }
  }

  public class SurveyQuestionModel : Model
  {
    public long SurveyId { get; set; }
    [Required]
    public long QuestionId { get; set; }
    // public QuestionModel Question { get; set; }
    public string SelectedAnswer { get; set; }
    [Required]
    public int Score { get; set; }
  }

  public class SurveyResponseModel : Model
  {
    public SurveyQuestionModel[] SurveyAnswer { get; set; } = new List<SurveyQuestionModel>().ToArray();
    [Required]
    public int Point { get; set; }
    [Required]
    public long UserId { get; set; }

    // public UserModel User { get; set; }
  }
}
