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
    public class FoodDeliveryController : Controller
    {
        
        private FoodDeliveryService service;

        public FoodDeliveryController(FoodDeliveryService service)
        {
            this.service = service;
        }

        [HttpGet ("restaurants")]
        public ActionResult<IEnumerable<Restaurant>> GetRestaurants()
        {
            return Ok(service.GetAllRestrans());
        }

        [HttpGet ("restaurant/{id}/menu")]
        public ActionResult<IEnumerable<MenuDTO>> GetRestaurantMenu(int id)
        {
            return Ok(service.MenuOfRaestraunt(id));
        }
        
    }
}

