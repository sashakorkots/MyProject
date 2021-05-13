using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FoodDeliveryApi.Models
{
    public class RestaurantInfoDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public IEnumerable<MenuDTO> Menu { get; set; }
    }
}