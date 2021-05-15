using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodDeliveryApi.Models;

namespace FoodDeliveryApi
{
    public class RestaurantsService
    {

        FoodDeliveryContext db;


        public RestaurantsService(FoodDeliveryContext context)
        {
            this.db = context;
        }

        internal IEnumerable<Restaurant> GetAllRestrans()
        {
            return db.Restaurants;
        }

        internal RestaurantInfoDTO MenuOfRaestraunt(int id)
        {
            RestaurantInfoDTO restaurantInfoDTO = new RestaurantInfoDTO();
            restaurantInfoDTO.Id = id;
            restaurantInfoDTO.Title = db.Restaurants.Where(r => r.Id == id).Single().Title;
            restaurantInfoDTO.Menu = db.DishTypes.Where(t => t.RestaurantId == id).Include(t => t.Dishes).Select(ToMenuDTO);

           return restaurantInfoDTO;
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
            dish.ID = dishesFromMenu.ID;
            dish.RestaurantId = dishesFromMenu.RestaurantId;
            dish.Title = dishesFromMenu.Title;
            dish.CookingTime = dishesFromMenu.CookingTime.TotalMinutes;
            dish.Price = dishesFromMenu.Price;
            return dish;
        }
    }
}