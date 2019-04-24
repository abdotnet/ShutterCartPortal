using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace shuttercart.Data.Migrations
{
    public partial class Init5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "ReceiptStatus",
                table: "Receipt",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReceiptStatus",
                table: "Receipt");
        }
    }
}
