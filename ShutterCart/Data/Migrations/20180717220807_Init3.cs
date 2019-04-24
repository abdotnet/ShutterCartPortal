using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace shuttercart.Data.Migrations
{
    public partial class Init3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ReceiptData",
                table: "Receipt",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReceiptData",
                table: "Receipt");
        }
    }
}
