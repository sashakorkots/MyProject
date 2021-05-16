using Microsoft.EntityFrameworkCore.Migrations;

namespace FoodDeliveryApi.Migrations
{
    public partial class AddClient : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_orders_client_client_id",
                table: "orders");

            migrationBuilder.DropPrimaryKey(
                name: "pk_client",
                table: "client");

            migrationBuilder.RenameTable(
                name: "client",
                newName: "clients");

            migrationBuilder.AddPrimaryKey(
                name: "pk_clients",
                table: "clients",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "fk_orders_clients_client_id",
                table: "orders",
                column: "client_id",
                principalTable: "clients",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_orders_clients_client_id",
                table: "orders");

            migrationBuilder.DropPrimaryKey(
                name: "pk_clients",
                table: "clients");

            migrationBuilder.RenameTable(
                name: "clients",
                newName: "client");

            migrationBuilder.AddPrimaryKey(
                name: "pk_client",
                table: "client",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "fk_orders_client_client_id",
                table: "orders",
                column: "client_id",
                principalTable: "client",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
