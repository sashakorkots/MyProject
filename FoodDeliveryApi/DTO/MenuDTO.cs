using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FoodDeliveryApi.Models
{
    public class MenuDTO
    {
        public string Title { get; set; }
        public List<MenuDishDTO> Dishes { get; set; }
    }
}