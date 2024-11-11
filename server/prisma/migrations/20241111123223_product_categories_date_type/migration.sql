/*
  Warnings:

  - Made the column `created_at` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `created_at` TIMESTAMP(0) NOT NULL;
