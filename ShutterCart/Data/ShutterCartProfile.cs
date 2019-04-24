using AutoMapper;
using shuttercart.Core.Models;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Data
{
  public class ShutterCartProfile : Profile
  {

    public ShutterCartProfile()
    {
      //CreateMap<Order, OrderViewModel>()
      //    .ForMember(o => o.OrderId, ex => ex.MapFrom(o => o.Id)).ReverseMap();

      CreateMap<Category, CategoryModel>().ReverseMap();
     // CreateMap<IEnumerable<Video>, IEnumerable<VideoModel>>().ReverseMap();
    }
  }
}
