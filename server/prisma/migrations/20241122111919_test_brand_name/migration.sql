/*
  Warnings:

  - You are about to drop the column `brand_id` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_brand_id_fkey`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `brand_id`,
    ADD COLUMN `brand_name` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_brand_name_fkey` FOREIGN KEY (`brand_name`) REFERENCES `Brand`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;
