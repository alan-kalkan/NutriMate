/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Brand_id_key` ON `Brand`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Brand_name_key` ON `Brand`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Category_id_key` ON `Category`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Category_name_key` ON `Category`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Product_id_key` ON `Product`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Product_name_key` ON `Product`(`name`);
