using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class DashboardModel
  {

    public long CategoryCount { get; set; }
    public long ProductCount { get; set; }
    public long AdvertCount { get; set; }

    public long VideoCount { get; set; }

    public long UsersCount { get; set; }

    public long QuestionCount { get; set; }
    public long ReceiptCount { get; set; }
    public long TotalShareAndEarnCount { get; set; }
    public long TotalWatchEarnCount { get; set; }
    public long TotalSurveyAnsweredCount { get; set; }
    public List<ReceiptModel> ReceiptModel { get; set; }

    public DashboardModel()
    {
      ReceiptModel = new List<ReceiptModel>();
    }
  }
}
