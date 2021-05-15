using Microsoft.EntityFrameworkCore;
using FoodDeliveryApi.Models;

namespace  FoodDeliveryApi.Models {
    public class FoodDeliveryContext : DbContext {
        public FoodDeliveryContext() { }
        public FoodDeliveryContext(DbContextOptions<FoodDeliveryContext> options) : base (options) { }

        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<Dish> Dishes { get; set; }
        public DbSet<DishType> DishTypes { get; set; }
        public DbSet<Courier> Couriers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDish> OrderDishes { get; set; }
    }
}