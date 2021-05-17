using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FoodDeliveryApi.Models;
using Microsoft.AspNetCore.Http;
using System.IdentityModel.Tokens.Jwt;

namespace FoodDeliveryApi.Controllers
{
    [Route("api/[controller]")]
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
        public ActionResult<string> RegisterClient(RegisterClientDTO model)
        {
            Client newClient = service.RegisterClient(model);
            return Ok("success");
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
        public ActionResult<Client> GetUser()
        {
            try
            {
                string jwt = Request.Cookies["jwt"];
                JwtSecurityToken token = jwtService.Verify(jwt);
                int clientId = int.Parse(token.Issuer);
                Client currentClient = service.GetById(clientId);
                return Ok(currentClient);
            }
            catch (Exception )
            {
                return Unauthorized();
            }
            
        }
        
        [HttpPost("logout")]
        public ActionResult<string> GetClient()
        {
            Response.Cookies.Delete("jwt");
            return Ok("success");
        }
        
        [HttpGet("all")]
        public ActionResult<IEnumerable<Client>> GetClients()
        {
            return service.GetAllClients();
        }
        
        
        
    }
}