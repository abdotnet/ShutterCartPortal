using shuttercart.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Infrastructures.Extension
{
  public static class ClaimsExtension
  {

    /// <summary>
    /// 
    /// </summary>
    /// <param name="principal"></param>
    /// <returns></returns>
    public static long GetUserId(this ClaimsPrincipal principal)
    {
      try
      {
        if (principal == null)
          throw new ArgumentNullException(nameof(principal));

        string userId = principal.FindFirst("UserId")?.Value;

        return long.Parse(userId);
      }
      catch
      {

        return 0;
      }

    }
  }
}
