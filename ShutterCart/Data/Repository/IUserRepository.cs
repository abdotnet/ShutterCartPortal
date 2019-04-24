using shuttercart.Core.Infrastructures;
using shuttercart.Core.Models;
using shuttercart.Data.Entity;
using System;
using System.Threading.Tasks;

namespace shuttercart.Data.Repository
{
  public interface IUserRepository
  {
    Task<UserModel> GetUserById(string userId);
    Task<UserModel> GetUserByEmail(string email);
    Task<UserModel> UpdateUser(UserModel user);
    Task<string> GetPasswordHash(string userId);
    Task<string> SetPasswordHash(string userId, string passwordHash);
    Task DeleteUser(UserModel user);
    Task<UserModel> CreateUser(UserModel model);
    Task AddSocialLogin(string userId, SocialLoginModel socialLogin);
    Task<UserModel> FindUserBySocialLogin(string loginProvider, string providerKey);
    Task<SocialLoginModel> GetSocialLogin(string userId, string loginProvider);
    Task<SocialLoginModel[]> GetSocialLogins(string userId);
    Task RemoveSocialLogin(string userId, string loginProvider, string providerKey);
    Task AddClaims(string userId, ClaimModel[] claims);
    Task SetClaimValue(string userId, string claimType, string claimValue);
    Task RemoveClaims(string userId, string[] claimTypes);
    Task<UserModel[]> FindUsersFromClaim(string type, string value);
    Task ChangeStatus(string userId, UserStatus status);
    Operation<UserModel> ValidateUser(string username, string password);
    Task<long> GetUserId(string userName);

    Task<Operation> AddOrUpdateRegister(UserModel model);
    Task<Operation> ChangePassword(PasswordChangeModel model);
    Task<Operation> UpdateProfile(UserModel model);
    Operation<UserModel[]> GetUsers();
    Operation<Pagination<UserModel>> GetUsers(string search, int pageIndex, int pageSize = 100);

    Operation ForgotPasswordCode(string email);
    Operation PasswordResetUpdate(RecoverPassword model);
  }
}
