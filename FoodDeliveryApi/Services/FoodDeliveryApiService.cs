using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodDeliveryApi.Models;

namespace FoodDeliveryApi
{
    public class FoodDeliveryService
    {

        FoodDeliveryContext db;


        public FoodDeliveryService(FoodDeliveryContext context)
        {
            this.db = context;
        }

        internal IEnumerable<Restaurant> GetAllRestrans()
        {
            return db.Restaurants;
        }

        internal IEnumerable<Dish> MenuOfRaestraunt(int id)
        {
           return db.Dishes.Where(d => d.RestaurantId == id).Include(d => d.Type);
        }
    }
}