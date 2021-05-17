using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FoodDeliveryApi.Models;
using Microsoft.AspNetCore.Http;

namespace FoodDeliveryApi.Controllers
{
    [Route("api/[controller]/client")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private UserService service;
        private JwtService jwtService;

        public ClientController(UserService userService, JwtService jwtService)
        {
            this.service = userService;
            this.jwtService = jwtService;
        }
        [HttpPost("register")]
        public ActionResult<Client> RegisterClient(RegisterClientDTO model)
        {
            return Ok(service.RegisterClient(model));
        }
        [HttpPost("login")]
        public ActionResult<string> LoginClient(LoginClientDTO model)
        {
            Client currentClient = service.FindByEmail(model.Email);
            if (currentClient == null || !service.CheckPassword(model.Password, currentClient))
            {
                return BadRequest("Invalid credentials");
            }
            else 
            {
                Response.Cookies.Append("jwt", jwtService.Generate(currentClient.Id), new CookieOptions{HttpOnly = true});
                return Ok("success");
            }
            
        }
        [HttpGet("")]
        public ActionResult<IEnumerable<Client>> GetClient()
        {
            return service.GetAllClients();
        }
        
        
        
    }
}