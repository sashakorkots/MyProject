using Microsoft.EntityFrameworkCore.Migrations;

namespace FoodDeliveryApi.Migrations
{
    public partial class AddDisheTypesToRestaurant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "restaurant_id",
                table: "dish_types",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "ix_dish_types_restaurant_id",
                table: "dish_types",
                column: "restaurant_id");

            migrationBuilder.AddForeignKey(
                name: "fk_dish_types_restaurants_restaurant_id",
                table: "dish_types",
                column: "restaurant_id",
                principalTable: "restaurants",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_dish_types_restaurants_restaurant_id",
                table: "dish_types");

            migrationBuilder.DropIndex(
                name: "ix_dish_types_restaurant_id",
                table: "dish_types");

            migrationBuilder.DropColumn(
                name: "restaurant_id",
                table: "dish_types");
        }
    }
}
