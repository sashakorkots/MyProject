using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FoodDeliveryApi.Models;

namespace FoodDeliveryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantsController : Controller
    {
        
        private RestaurantsService service;

        public RestaurantsController(RestaurantsService service)
        {
            this.service = service;
        }

        [HttpGet ("")]
        public ActionResult<IEnumerable<Restaurant>> GetRestaurants()
        {
            return Ok(service.GetAllRestrans());
        }

        [HttpGet ("{id}/menu")]
        public ActionResult<RestaurantInfoDTO> GetRestaurantMenu(int id)
        {
            return Ok(service.MenuOfRaestraunt(id));
        }
    }
}

