using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using shuttercart.Core.Services;
using shuttercart.Core.Models;
using shuttercart.Data;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using shuttercart.Core.Infrastructures;

namespace shuttercart.Core.Services
{
  public class CategoryService : ICategoryService
  {

    private readonly ILogger<CategoryService> _logger;
    private readonly ShutterCartContext _repo;
    private readonly IConfiguration _config;
    private readonly IMapper _mapper;

    public CategoryService(ILogger<CategoryService> logger, ShutterCartContext repo, IConfiguration config, IMapper mapper)
    {
      _logger = logger;
      _repo = repo;
      _config = config;
      _mapper = mapper;
    }


    #region Category details

    public Operation<Pagination<CategoryModel>> GetCategories(string search, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get category ");

        var query = _repo.Category.Where(c => !c.IsCancelled).ToArray();

        if (!string.IsNullOrEmpty(search))
          query = query.Where(c => c.Name.Contains(search)).ToArray();

        long totalPageSize = query.LongCount();

        if (pageIndex > 0) query = query.Skip(pageSize).Take(pageIndex * pageSize).ToArray();

        var category_query = _mapper.Map<IEnumerable<Category>, IEnumerable<CategoryModel>>(query.OrderByDescending(c => c.CreatedDate)).ToArray();



        return new Pagination<CategoryModel>(category_query,
           totalPageSize,
          pageIndex,
          pageSize);
      });
    }

    public Operation<CategoryModel[]> GetCategories()
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get category ");
        var query = _repo.Category.Where(s => !s.IsCancelled).ToList();

        var category_query = _mapper.Map<IEnumerable<Category>, IEnumerable<CategoryModel>>(query).ToArray();

        return category_query;
      });
    }
    public Operation<CategoryModel> GetCategory(long id)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get category by Id {id}");
        var query = _repo.Category.SingleOrDefault(c => c.CategoryId == id && !c.IsCancelled);

        var category_query = _mapper.Map<Category, CategoryModel>(query);

        return category_query;
      });
    }

    public Operation UpdateCategory(CategoryModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("Category cannot be empty");
          throw new Exception("category cannot be empty");
        }

        var query = _repo.Category.FirstOrDefault(c => c.CategoryId == model.CategoryId);

        query.ContentLength = model.ContentLength;
        query.ContentType = model.ContentType;
        query.Icon = model.Icon;

        _repo.Update<Category>(query);
        _repo.SaveChanges();
      });

    }

    public Operation<CategoryModel> AddCategoryOrUpdate(CategoryModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("Category cannot be empty");
          throw new Exception("Category cannot be empty");
        }

        bool validate = model.Validate();
        if (!validate)
        {
          _logger.LogError("Category name cannot be empty");
          throw new Exception("Category name cannot be empty");
        }

        var query = _repo.Category.FirstOrDefault(c => c.CategoryId == model.CategoryId);

        if (query == null)
        {
          query = _mapper.Map<CategoryModel, Category>(model);
          query.Icon = model.Icon;
          query.ContentLength = model.ContentLength;
          query.ContentType = model.ContentType;

          _repo.Add<Category>(query);
          _repo.SaveChanges();
        }
        else
        {
          query.Name = model.Name;
          query.Icon = model.Icon;
          query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
          query.ModifiedDate = DateTime.Now;
          query.Icon = model.Icon;
          query.ContentLength = model.ContentLength;
          query.ContentType = model.ContentType;

          _repo.Update<Category>(query);
          _repo.SaveChanges();
        }

        return _mapper.Map<Category, CategoryModel>(query);
      });
    }
    public Operation<CategoryModel> DeleteCategory(long id)
    {
      return Operation.Create(() =>
      {
        var query = _repo.Category.FirstOrDefault(c => c.CategoryId == id);
        var product = _repo.Product.FirstOrDefault(p => p.CategoryId == query.CategoryId && !p.IsCancelled);

        // check if the category is tied to a product already  ... 
        if (product == null)
        {
          query.IsCancelled = true;
          _repo.Update<Category>(query);
          _repo.SaveChanges();

          _logger.LogInformation($"Category is canceled has been set to true with Id= {id}");
        }

        return _mapper.Map<Category, CategoryModel>(query);
      });
    }
    public Operation<CategoryModel> DeleteCategoryItem(long id)
    {
      return Operation.Create(() =>
      {
        var query = _repo.Category.FirstOrDefault(c => c.CategoryId == id);

        // check if the category is tied to a product already  ... 
        if (query != null)
        {
          _repo.Remove<Category>(query);
          _repo.SaveChanges();

          _logger.LogInformation($"Category is deleted has been set to true with Id= {id}");
        }
        return _mapper.Map<Category, CategoryModel>(query);
      });
    }
  }
  #endregion
}

