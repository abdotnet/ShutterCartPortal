using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Controllers.Web
{
  public class HomeController : Controller
  {
    public HomeController()
    {

    }

    public ActionResult Index()
    {
      return View();
    }
  }
}
