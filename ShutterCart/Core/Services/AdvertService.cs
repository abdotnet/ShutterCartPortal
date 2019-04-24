using AutoMapper;
using Microsoft.Extensions.Configuration;
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
  public class AdvertService : IAdvertService
  {
    private readonly ILogger<AdvertService> _logger;
    private readonly ShutterCartContext _repo;
    private readonly IConfiguration _config;
    private readonly IMapper _mapper;
    public AdvertService(ILogger<AdvertService> logger, ShutterCartContext repo, IConfiguration config, IMapper mapper)
    {
      _logger = logger;
      _repo = repo;
      _config = config;
      _mapper = mapper;
    }


    #region Advert details

    public Operation<Pagination<AdvertModel>> GetAdverts(string search, int pageIndex, int pageSize = 100)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get adverts ");

        var query = _repo.Advert.Where(s => !s.IsCancelled).ToList();

        if (!string.IsNullOrEmpty(search))
          query = query.Where(c => c.Name.Contains(search)).ToList();

        long totalCount = query.LongCount();
        if (pageIndex > 0) query = query.Skip(pageSize).Take(pageIndex * pageSize).ToList();

        var adverts = _mapper.Map<IEnumerable<Advert>, IEnumerable<AdvertModel>>(query).ToArray();

        return new Pagination<AdvertModel>(adverts, totalCount, pageSize, pageIndex);

      });
    }

    public Operation<AdvertModel[]> GetAdverts()
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation("I am currently @ the get advert ");
        var query = _repo.Advert.Where(c => !c.IsCancelled).ToList();

        var _query = _mapper.Map<IEnumerable<Advert>, IEnumerable<AdvertModel>>(query).ToArray();

        return _query;
      });
    }
    public Operation<AdvertModel> GetAdvert(long id)
    {
      return Operation.Create(() =>
      {
        _logger.LogInformation($"I am currently @ the get advert by Id {id}");

        var query = _repo.Advert.SingleOrDefault(c => c.AdvertId == id);

        var _query = _mapper.Map<Advert, AdvertModel>(query);

        return _query;
      });
    }

    public Operation<AdvertModel> AddAdvertOrUpdate(AdvertModel model)
    {
      return Operation.Create(() =>
      {
        if (model == null)
        {
          _logger.LogError("Advert cannot be empty");
          throw new Exception("Advert cannot be empty");
        }

        bool validate = model.Validate();

        if (!validate)
        {
          _logger.LogError("Advert name cannot be empty");
          throw new Exception("Advert name cannot be empty");
        }

        var query = _repo.Advert.FirstOrDefault(c => c.AdvertId == model.AdvertId);

        if (query == null)
        {
          query = _mapper.Map<AdvertModel, Advert>(model);
          _repo.Add<Advert>(query);
          _repo.SaveChanges();
        }
        else
        {
          query.Name = model.Name;
          query.ImageUrl = model.ImageUrl;
          query.Description = model.Description;

          query.ModifiedBy = model.ModifiedBy.HasValue ? model.ModifiedBy.Value : 0;
          query.ModifiedDate = DateTime.Now;

          _repo.Update<Advert>(query);
          _repo.SaveChanges();
        }

        return _mapper.Map<Advert, AdvertModel>(query);
      });
    } 
    public Operation<AdvertModel> DeleteAdvert(long id)
    {
      return Operation.Create(() =>
      {
        var query = _repo.Advert.SingleOrDefault(c=>c.AdvertId == id);
        query.IsCancelled = true;

        _repo.Update<Advert>(query);
        _repo.SaveChanges();
        _logger.LogInformation($"Advert has been deleted with Id= {id} ");
        return _mapper.Map<Advert, AdvertModel>(query);
      });
    }


    public Operation UpdateImages(string fileName, int id)
    {
      return Operation.Create(() =>
      {
        if (fileName == string.Empty || id == 0)
          throw new Exception("filename cannot be empty or advert not found");

        var advert = _repo.Advert.FirstOrDefault(c => c.AdvertId == id);

        if (advert != null)
        {
          advert.ImageUrl = fileName;
          _repo.Update<Advert>(advert);
          _repo.SaveChanges();
        }
      });
    }
  }

  #endregion

}

