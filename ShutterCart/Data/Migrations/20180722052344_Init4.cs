using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace shuttercart.Data.Migrations
{
    public partial class Init4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "ProductId",
                table: "UserPoint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "QuestionId",
                table: "UserPoint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ReceiptId",
                table: "UserPoint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "VideoId",
                table: "UserPoint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserPoint_ProductId",
                table: "UserPoint",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_UserPoint_QuestionId",
                table: "UserPoint",
                column: "QuestionId");

            migrationBuilder.CreateIndex(
                name: "IX_UserPoint_ReceiptId",
                table: "UserPoint",
                column: "ReceiptId");

            migrationBuilder.CreateIndex(
                name: "IX_UserPoint_VideoId",
                table: "UserPoint",
                column: "VideoId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserPoint_Product_ProductId",
                table: "UserPoint",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserPoint_Question_QuestionId",
                table: "UserPoint",
                column: "QuestionId",
                principalTable: "Question",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserPoint_Receipt_ReceiptId",
                table: "UserPoint",
                column: "ReceiptId",
                principalTable: "Receipt",
                principalColumn: "ReceiptId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserPoint_Video_VideoId",
                table: "UserPoint",
                column: "VideoId",
                principalTable: "Video",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserPoint_Product_ProductId",
                table: "UserPoint");

            migrationBuilder.DropForeignKey(
                name: "FK_UserPoint_Question_QuestionId",
                table: "UserPoint");

            migrationBuilder.DropForeignKey(
                name: "FK_UserPoint_Receipt_ReceiptId",
                table: "UserPoint");

            migrationBuilder.DropForeignKey(
                name: "FK_UserPoint_Video_VideoId",
                table: "UserPoint");

            migrationBuilder.DropIndex(
                name: "IX_UserPoint_ProductId",
                table: "UserPoint");

            migrationBuilder.DropIndex(
                name: "IX_UserPoint_QuestionId",
                table: "UserPoint");

            migrationBuilder.DropIndex(
                name: "IX_UserPoint_ReceiptId",
                table: "UserPoint");

            migrationBuilder.DropIndex(
                name: "IX_UserPoint_VideoId",
                table: "UserPoint");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "UserPoint");

            migrationBuilder.DropColumn(
                name: "QuestionId",
                table: "UserPoint");

            migrationBuilder.DropColumn(
                name: "ReceiptId",
                table: "UserPoint");

            migrationBuilder.DropColumn(
                name: "VideoId",
                table: "UserPoint");
        }
    }
}
