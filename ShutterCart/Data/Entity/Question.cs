using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data.Entity
{
    public class Questions : BaseEntity
    {
        [Key]
        public long Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public string OptionA { get; set; }
        public string OptionB { get; set; }
        public string OptionC { get; set; }
        public string OptionD { get; set; }
    }
    public class SurveyQuestion : BaseEntity
    {
        [Key]
        public long SurveyId { get; set; }
        public long QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public Questions Question { get; set; }
        public string AnswerSelected { get; set; }
        public long UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
        public virtual int Score { get; set; }

    }
}
