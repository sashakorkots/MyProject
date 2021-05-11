using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FoodDeliveryApi.Models;

namespace FoodDeliveryApi.Controllers
{
    public class FoodDeliveryController : Controller
    {
        private FoodDeliveryService service;

        public FoodDeliveryController(FoodDeliveryService service)
        {
            this.service = service;
        }

        [HttpGet ("restaurants")]
        public ActionResult<IEnumerable<Restaurant>> GetRestaurant()
        {
            return Ok(service.GetAllRestrans());
        }
        
    }
}

