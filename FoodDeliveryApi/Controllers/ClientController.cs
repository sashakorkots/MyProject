using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FoodDeliveryApi.Models;

namespace FoodDeliveryApi.Controllers
{
    [Route("api/[controller]/client")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private UserService service;

        public ClientController(UserService service)
        {
            this.service = service;
        }
        [HttpPost("register")]
        public ActionResult<Client> PostClient(Client model)
        {
            return Ok(new Client());
        }
        
        
    }
}