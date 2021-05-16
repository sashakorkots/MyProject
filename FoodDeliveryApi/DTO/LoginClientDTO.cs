using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FoodDeliveryApi.Models
{
    public class LoginClientDTO
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}