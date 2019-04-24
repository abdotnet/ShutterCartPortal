using shuttercart.Core.Infrastructures;
using shuttercart.Core.Models;
using System;

namespace shuttercart.Core.Services
{
  public interface ICategoryService
  {
    Operation<Pagination<CategoryModel>> GetCategories(string search, int pageIndex, int pageSize = 100);
    Operation<CategoryModel[]> GetCategories();
    Operation<CategoryModel> GetCategory(long id);
    Operation<CategoryModel> AddCategoryOrUpdate(CategoryModel model);
    Operation<CategoryModel> DeleteCategory(long id);
    Operation UpdateCategory(CategoryModel model);
    Operation<CategoryModel> DeleteCategoryItem(long id);
  }
}
