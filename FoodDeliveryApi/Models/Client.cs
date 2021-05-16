using System;
using System.Collections.Generic;

namespace FoodDeliveryApi.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<Order> Orders { get; set; }
    }
}