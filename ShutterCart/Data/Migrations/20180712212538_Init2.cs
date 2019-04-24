using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace shuttercart.Data.Migrations
{
    public partial class Init2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "ContentLength",
                table: "Category",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<string>(
                name: "ContentType",
                table: "Category",
                maxLength: 20,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContentLength",
                table: "Category");

            migrationBuilder.DropColumn(
                name: "ContentType",
                table: "Category");
        }
    }
}
