using Microsoft.EntityFrameworkCore;
using FoodDeliveryApi.Models;

namespace  FoodDeliveryApi.Models {
    public class FoodDeliveryContext : DbContext {
        public FoodDeliveryContext() { }
        public FoodDeliveryContext(DbContextOptions<FoodDeliveryContext> options) : base (options) { }

        public DbSet<Restaurant> Restaurants { get; set; }
    }
}