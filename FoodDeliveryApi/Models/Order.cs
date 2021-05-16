using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FoodDeliveryApi.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public string DeliveryAddress { get; set; }
        public TimeSpan DeliveryTime { get; set; }
        public decimal TotalPrice { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
        public int RestaurantId { get; set; }
        public Restaurant Restaurant { get; set; }
        public int CourierId { get; set; }
        public Courier Courier { get; set; }
        public List<OrderDish> OrderDishes { get; set; }
    }
}