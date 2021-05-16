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
        public ActionResult<Client> RegisterClient(RegisterClientDTO model)
        {
            return Ok(service.RegisterClient(model));
        }
        [HttpPost("login")]
        public ActionResult<Client> LoginClient(LoginClientDTO model)
        {
            Client currentClient = service.FindByEmail(model.Email);
            if (currentClient == null || !service.CheckPassword(model.Password, currentClient))
            {
                return BadRequest("Invalid credentials");
            }
            else 
            {
                return Ok(currentClient);
            }
            
        }
        [HttpGet("")]
        public ActionResult<IEnumerable<Client>> GetClient()
        {
            return service.GetAllClients();
        }
        
        
        
    }
}