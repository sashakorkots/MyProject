using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FoodDeliveryApi.Models
{
    public class Dish
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int TypeId { get; set; }
        public DishType Type { get; set; }
        public TimeSpan CookingTime { get; set; }
        public decimal Price { get; set; }
        public int RestaurantId { get; set; }
        public Restaurant Restaurant { get; set; }
    }
}