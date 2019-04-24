using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using shuttercart.Core.Infrastructures.Extension;
using shuttercart.Core.Models;
using shuttercart.Data.Repository;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Controllers.Api
{
  /// <summary>
  /// Api controller 
  /// </summary>
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class ApiController : Controller
  {

    /// <summary>
    /// Get user id  ..
    /// </summary>
    public long UserId
    {
      get
      {
        return User.GetUserId();
      }
    }

  }
}
