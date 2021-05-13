using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FoodDeliveryApi.Models
{
    public class MenuDishDTO
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int CookingTime { get; set; }
        public decimal Price { get; set; }
    }
}