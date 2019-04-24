using AutoMapper;
using AutoMapper.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Infrastructures;
using shuttercart.Core.Interfaces;
using shuttercart.Core.Models;
using shuttercart.Data;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Services
{
  public class ProductService : IProductService
  {
    private readonly ILogger<ProductService> _logger;
    private readonly ShutterCartContext _repo;
    private readonly IMapper _mapper;

    public ProductService(ILogger<ProductService> logger, ShutterCartContext repo, IMapper mapper)
    {
      _logger = logger;
      _repo = repo;
      // _config = config;
      _mapper = mapper;
    }

    #region Products details

    public Operation<Pagination<ProductModel>> GetProducts(string search, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get product ");

        var query = _repo.Product.Include(c => c.Category).Where(s => !s.IsCancelled).ToList();

        if (!string.IsNullOrEmpty(search))
          query = query.Where(c => c.ProductName.Contains(search)).ToList();

        long totalCount = query.LongCount();
        if (pageIndex > 0) query = query.Skip(pageSize).Take(pageIndex * pageSize).ToList();

        var products = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductModel>>(query)
                  .OrderByDescending(c => c.ProductId).ToArray();

        return new Pagination<ProductModel>(products, totalCount, pageSize, pageIndex);

      });
    }

    public Operation<ProductModel[]> GetProducts()
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get product ");

        var query = _repo.Product.Where(s => !s.IsCancelled).ToList();

        var _query = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductModel>>(query).OrderByDescending(c => c.ProductId).ToArray();

        return _query;
      });
    }
    public Operation<ProductModel> GetProduct(long id)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get product by category Id {id}");

        var query = _repo.Product.SingleOrDefault(c => c.ProductId == id);

        var _query = _mapper.Map<Product, ProductModel>(query);

        return _query;
      });
    }
    public Operation<ProductModel[]> GetCategoryProduct(long categoryId)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get category product by Id {categoryId}");

        var query = _repo.Product.Include(c => c.Category).Where(c => c.Category.CategoryId == categoryId);

        var _query = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductModel>>(query);

        return _query.ToArray();
      });
    }

    public Operation UpdateImages(string fileName, long productId)
    {
      return Operation.Create(() =>
      {
        if (fileName == string.Empty || productId == 0)
          throw new Exception("filename cannot be empty or product not found");

        var product = _repo.Product.FirstOrDefault(c => c.ProductId == productId);

        if (product != null)
        {
          product.ImageUrl = fileName;
          _repo.Update<Product>(product);
          _repo.SaveChanges();
        }
      });
    }

    public Operation<ProductModel> AddProductOrUpdate(ProductModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("Product cannot be empty");
          throw new Exception("Product cannot be empty");
        }

        bool validate = model.Validate();
        if (!validate)
        {
          _logger.LogError("Product name cannot be empty");
          throw new Exception("Product name cannot be empty");
        }

        var query = _repo.Product.Include(c => c.Category).FirstOrDefault(c => c.ProductId == model.ProductId);

        if (query == null)
        {
          query = _mapper.Map<ProductModel, Product>(model);
          _repo.Add<Product>(query);
          _repo.SaveChanges();
        }
        else
        {
          query.ProductName = model.ProductName;
          query.ImageUrl = model.ImageUrl;
          query.CategoryId = model.CategoryId;
          query.Price = model.Price;
          //query = _mapper.Map<ProductModel, Product>(model);
          query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
          query.ModifiedDate = DateTime.Now;

          _repo.Update<Product>(query);
          _repo.SaveChanges();
        }

        return _mapper.Map<Product, ProductModel>(query);
      });
    }
    public Operation<ProductModel> DeleteProduct(long id)
    {
      return Operation.Create(() =>
      {
        var query = _repo.Product.SingleOrDefault(c => c.ProductId == id);
        query.IsCancelled = true;

        _repo.Update<Product>(query);
        _repo.SaveChanges();
        _logger.LogInformation($"Product has been deleted with Id= {id} ");
        return _mapper.Map<Product, ProductModel>(query);
      });
    }

    public Operation<int> UploadFile(byte[] fileContent, string fileName, string contentType, int productId = 0)
    {
      return Operation.Create(() =>
      {
        if (!fileContent.Any() || fileName == string.Empty || contentType == string.Empty)
          throw new Exception("File not found");

        Product product;
        if (productId > 0)
          product = _repo.Product.SingleOrDefault(c => c.ProductId == productId);

        return 1;
      });
    }


    #endregion

  }
}

