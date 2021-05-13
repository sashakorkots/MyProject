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
    public class OrderController : ControllerBase
    {
        private OrderService service;

        public OrderController(OrderService service)
        {
            this.service = service;
        }
        [HttpPost("")]
        public ActionResult<OrderDish> PostOrderDish (OrderDish model)
        {
            return null;
        }
        
    }
}