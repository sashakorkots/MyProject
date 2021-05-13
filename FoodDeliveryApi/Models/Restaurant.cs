using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FoodDeliveryApi.Models
{
    public class Restaurant
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string OpeningTime { get; set; }
        public List<Dish> Dishes { get; set; }
        public List<DishType> DishTypes { get; set; }
    }
}