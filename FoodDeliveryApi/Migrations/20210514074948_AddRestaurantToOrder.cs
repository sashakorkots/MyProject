using Microsoft.EntityFrameworkCore.Migrations;

namespace FoodDeliveryApi.Migrations
{
    public partial class AddRestaurantToOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "restaurant_id",
                table: "orders",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "ix_orders_restaurant_id",
                table: "orders",
                column: "restaurant_id");

            migrationBuilder.AddForeignKey(
                name: "fk_orders_restaurants_restaurant_id",
                table: "orders",
                column: "restaurant_id",
                principalTable: "restaurants",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_orders_restaurants_restaurant_id",
                table: "orders");

            migrationBuilder.DropIndex(
                name: "ix_orders_restaurant_id",
                table: "orders");

            migrationBuilder.DropColumn(
                name: "restaurant_id",
                table: "orders");
        }
    }
}
