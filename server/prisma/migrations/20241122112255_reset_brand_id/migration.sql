/*
  Warnings:

  - You are about to drop the column `brand_name` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_brand_name_fkey`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `brand_name`,
    ADD COLUMN `brand_id` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `Brand`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
