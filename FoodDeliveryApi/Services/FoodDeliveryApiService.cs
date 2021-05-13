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

        internal IEnumerable<MenuDTO> MenuOfRaestraunt(int id)
        {
           return db.DishTypes.Where(t => t.RestaurantId == id).Include(t => t.Dishes).Select(ToMenuDTO);
        }

        private MenuDTO ToMenuDTO(DishType dishTypesWithDishes)
        {
            MenuDTO menu = new MenuDTO();
            menu.Title = dishTypesWithDishes.Title;
            menu.Dishes = dishTypesWithDishes.Dishes.Select(ToMenuDishDTO).ToList();
            return menu;
        }
        private MenuDishDTO ToMenuDishDTO(Dish dishesFromMenu)
        {
            MenuDishDTO dish = new MenuDishDTO();
            dish.Title = dishesFromMenu.Title;
            dish.CookingTime = dishesFromMenu.CookingTime;
            dish.Price = dishesFromMenu.Price;
            return dish;
        }
    }
}