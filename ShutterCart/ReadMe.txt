dECLARE @Sql NVARCHAR(500) DECLARE @Cursor CURSOR

SET @Cursor = CURSOR FAST_FORWARD FOR
SELECT DISTINCT sql = 'ALTER TABLE [' + tc2.TABLE_NAME + '] DROP [' + rc1.CONSTRAINT_NAME + ']'
FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS rc1
LEFT JOIN INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc2 ON tc2.CONSTRAINT_NAME =rc1.CONSTRAINT_NAME

OPEN @Cursor FETCH NEXT FROM @Cursor INTO @Sql

WHILE (@@FETCH_STATUS = 0)
BEGIN
Exec sp_executesql @Sql
FETCH NEXT FROM @Cursor INTO @Sql
END

CLOSE @Cursor DEALLOCATE @Cursor
GO

EXEC sp_MSforeachtable 'DROP TABLE ?'
GO



===============-----------------------------

 Dashboard
Total Category count
Total Product count
Total Advert count
Total Video count
Total Users count
Total Question count
Total Receipt count
Total Share & Earn count
Total Watch & Earn count
Total Survey Answered count
Last 20 list of Receipts

2) Admin Setup
Setup Category
Setup Product
Setup Advert
Setup Question
Setup Genre
Setup Video

3) Report
List of Wallet Points
List of Registered Users

List of point earned via sharing
List of points earned via watched video
List of points earned via survey

List of Receipts - Admin should be able to review & update receipt before approval
(after approval it will be visibile to the user and reward will be awarded)
List of points for each user
