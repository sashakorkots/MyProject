using Microsoft.EntityFrameworkCore.Migrations;

namespace FoodDeliveryApi.Migrations
{
    public partial class AddEmailToClient : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "client",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "email",
                table: "client");
        }
    }
}
