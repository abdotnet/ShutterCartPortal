using shuttercart.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shuttercart.Core.Interfaces
{
  public interface IDashboardService
  {
    Operation<DashboardModel> GetDahboard();
  }
}
