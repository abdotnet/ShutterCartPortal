using shuttercart.Core.Infrastructures;
using shuttercart.Core.Models;
using System;
using System.Threading.Tasks;

namespace shuttercart.Core.Interfaces
{
  public interface IProductService
  {
    Operation<Pagination<ProductModel>> GetProducts(string search, int pageIndex, int pageSize = 100);
    Operation<ProductModel[]> GetProducts();
    Operation<ProductModel> GetProduct(long id);
    Operation<ProductModel> AddProductOrUpdate(ProductModel model);
    Operation<ProductModel> DeleteProduct(long id);
    Operation<ProductModel[]> GetCategoryProduct(long categoryId);
    Operation UpdateImages(string fileName, long productId);
    Operation<int> UploadFile(byte[] fileContent, string fileName, string contentType, int productId=0  );
  }
}
