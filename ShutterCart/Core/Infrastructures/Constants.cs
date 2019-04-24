using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Infrastructures
{

  public static class Constants
  {
    public static class Tokens
    {
      public const string OnBoardUser = "OnBoardUser";
    }

    public static class AuthScheme
    {
      public const string Cookie = "cookie";
      public const string OIDC = "oidc";
      public const string JWT = "jwt";
    }

    public static class TempData
    {
      public const string Message = "message";
    }

    public static class Session
    {
      public const string ReturnUrl = "returnUrl";
    }

    public static class Cors
    {
      public const string EnableAll = "EnableAll";
      public const string WithCredentials = "WithCredentials";
      public const string EnableAllWithCredentials = "EnableAllWithCredentials";
    }
  }
}
