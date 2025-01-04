-- MySQL dump 10.13  Distrib 9.1.0, for macos15.1 (arm64)
--
-- Host: localhost    Database: nutrimate
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('16d59aca-d0ab-45df-9e2e-93199ffcbebc','05e4f69d4fabdd306a8158528d3b892727efcf23484b6997f992e74f7004330c','2024-11-22 13:40:14.544','20241122133953_one_review_per_product',NULL,NULL,'2024-11-22 13:40:14.541',1),('1f4f35c7-2000-4246-a0e0-7bd4ee5fd5bc','4726c94f377849d58146db6fd5f69ebb7aa4c4424fcc3f2b7f8348fe1f5c89d4','2024-11-22 13:40:14.464','20241111180239_added_unique_type',NULL,NULL,'2024-11-22 13:40:14.446',1),('231f594f-84a8-49b3-b54b-9fc8d3813fce','8d65a726051908a0d278408063801e28b2db244b0400f814a5ad3a7f144f64b8','2024-11-22 13:40:14.489','20241117151625_added_review_table',NULL,NULL,'2024-11-22 13:40:14.472',1),('257e94cc-78f8-4a1c-b810-4d1d857b25e2','b8c41d3db0c595b94d19b8c8efeb0a45751bcbf5d8d1c13bab6a6fa459753fcd','2024-12-14 22:42:00.483','20241214224200_added_favorites',NULL,NULL,'2024-12-14 22:42:00.469',1),('3aebec31-ad96-488f-98e6-e18043885938','344dcf7cc216fac5e700dc68c7a08a1a6d8efc51b1d6ecc5f89509ae260feea7','2024-11-22 13:40:14.413','20241111172449_added_brand_table_and_brand_id_for_products',NULL,NULL,'2024-11-22 13:40:14.398',1),('45b74428-5fac-4e9e-a05a-9f948b331bd6','1c57c6354560d17788497b69737edf0e3a32f7ffd964cb7a4c9ac8013d860641','2024-12-20 10:47:25.328','20241220104725_add_comment_type',NULL,NULL,'2024-12-20 10:47:25.320',1),('64650bf2-9278-4be1-833d-8c6b5338bb56','58048eb0976bbf06ceb20f0f5ce4ac51075bcebfab1aec07437e50f6d89fe03e','2024-11-22 13:40:14.427','20241111173827_updated_description_length',NULL,NULL,'2024-11-22 13:40:14.418',1),('6c700c06-59a4-4778-998e-9564903e3244','b01b0fe5124a1cbf61e0a2da8ee03963abe7a1508491f7eb8f4debdac60932e9','2024-11-22 13:40:14.363','20241111113350_added_gender_to_user',NULL,NULL,'2024-11-22 13:40:14.359',1),('7db857e6-318d-4d77-9865-f1c68ab843a9','868ab286dfa9bb6124d30ac0e58abd0b8ccba6cba36175cc7b1b35d017240c67','2024-11-22 13:40:14.541','20241122133747_many_reviews_per_user',NULL,NULL,'2024-11-22 13:40:14.520',1),('8b36b097-1d99-4079-8a0c-692685165cb1','f94dd7b59cff1d2a924a814bf676310c3796b7527e7c118339fbb9dbe7ed42a8','2024-12-14 22:41:53.569','20241201213623_added_default_createdat_product',NULL,NULL,'2024-12-14 22:41:53.563',1),('8b77085d-4277-4bd1-8eb6-2f67a210c198','2b16d2a7db0470fe1e3b8a1dbab0e8f0c3b9f1db776761da1e8571480302a2b3','2024-11-22 13:40:14.398','20241111154948_change_category_id_type',NULL,NULL,'2024-11-22 13:40:14.373',1),('93be8534-a482-4f51-9458-6f2d0d1f46a6','00e19abecdf88a9784676719902e51c3babe458e0c521a7636c80d3b4a00f606','2024-11-22 13:40:14.430','20241111173927_updated_image_url_lenght',NULL,NULL,'2024-11-22 13:40:14.428',1),('945c8715-ef15-42de-9e9d-8186eeef73b9','40ee29836bf6f4b7cf24b8533ecd39253a4dc00f4fdd7d76940b673eb6640bf8','2024-11-22 13:40:14.445','20241111175900_updated_description_length',NULL,NULL,'2024-11-22 13:40:14.431',1),('9500110f-0e5b-4d74-9ac1-55df27bc8884','d7ec0638b4ac947b8bb5f0ad79878fecc6e26d45dca8cd10d89e14854b1eb47f','2025-01-03 16:39:51.413','20250103163951_added_user_role',NULL,NULL,'2025-01-03 16:39:51.400',1),('b88e66d2-3132-479b-8b0e-179aae2dc694','5e5c0b73a7e89045999964b15fdb3943c89cdfe2d38baf93a3ba9eecab844072','2024-11-22 13:40:14.373','20241111123223_product_categories_date_type',NULL,NULL,'2024-11-22 13:40:14.363',1),('cb968a84-c337-432c-b891-cc2eb4f6fd7e','ecb5ae452b0ae57d44662bec7d6e0be6293d66420024e90025a7b77fd4aa0d4c','2024-11-22 13:40:14.358','0_init',NULL,NULL,'2024-11-22 13:40:14.325',1),('cd59b178-60cf-4eda-ae8d-983f408e9959','7ef08da9821f0f26900a8280e0993f4a7086a65e155703129cc5da476415a339','2024-11-22 13:40:14.520','20241122112255_reset_brand_id',NULL,NULL,'2024-11-22 13:40:14.505',1),('d6d40b5e-a267-45c8-92f1-d5b69843d53a','1f8305c56ac68f0b21819d4428cf974d938e1a2404b3d1bb82e5ee832a01983a','2024-11-22 13:40:14.417','20241111173555_added_treatment_duration_on_product',NULL,NULL,'2024-11-22 13:40:14.413',1),('e18c4a50-331e-44a1-8a76-8bcb375969b8','265e93c99740bbd5d36d94a2fcd12de8982230fd07cf25dbfa86ee15d114f7c7','2024-11-22 13:40:14.505','20241122111919_test_brand_name',NULL,NULL,'2024-11-22 13:40:14.490',1),('e36df2b6-d0e6-4ead-b117-acf2df1c4030','ab90e8ec88a2cee4f136905acb6413bb55a4850ee3883af93e9b4136edb70bbe','2024-11-22 13:40:14.472','20241117140201_changed_image_url_type',NULL,NULL,'2024-11-22 13:40:14.464',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Brand`
--

DROP TABLE IF EXISTS `Brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Brand` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Brand_id_key` (`id`),
  UNIQUE KEY `Brand_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Brand`
--

LOCK TABLES `Brand` WRITE;
/*!40000 ALTER TABLE `Brand` DISABLE KEYS */;
INSERT INTO `Brand` VALUES ('1a2e00fe-a3a9-49bb-a1c9-7ea24589780c','Bion','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'),('42f46d80-d8cd-4312-be1e-fe5d1bfbf43c','New Nordic','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'),('5bcd1b57-01c5-4cc3-8c2b-f6c6cc157ecf','Physcience','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'),('6031ca6a-b4b8-4037-b40a-eb969b4231fb','Boiron','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'),('af58e669-394d-485d-ad7f-e9ad9aaadfd9','Luxeol','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.');
/*!40000 ALTER TABLE `Brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Category` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Category_id_key` (`id`),
  UNIQUE KEY `Category_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Favorite`
--

DROP TABLE IF EXISTS `Favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Favorite` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `Favorite_user_id_product_id_key` (`user_id`,`product_id`),
  KEY `Favorite_product_id_fkey` (`product_id`),
  CONSTRAINT `Favorite_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Favorite_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Favorite`
--

LOCK TABLES `Favorite` WRITE;
/*!40000 ALTER TABLE `Favorite` DISABLE KEYS */;
INSERT INTO `Favorite` VALUES ('08617e64-fe2b-4b93-adb4-b6269155f477','0d537b0e-ba78-4f19-a349-c4d92791d0ee','7e2b16b6-1e88-400e-8a27-c57510ab0a1e','2024-12-17 20:35:23.556'),('74421a94-8cb8-462d-989f-0d843b1c05ff','0d537b0e-ba78-4f19-a349-c4d92791d0ee','ba278925-88f5-4b6f-9156-b14935e12c9c','2024-12-15 13:50:24.890'),('82501f16-0bbd-4762-a25d-78113e0c73c1','0d537b0e-ba78-4f19-a349-c4d92791d0ee','dac685a9-f35d-40d7-9e75-c953aa3d96bc','2024-12-18 21:00:49.041'),('8ac9646c-a544-4646-b889-91db8a465293','0d537b0e-ba78-4f19-a349-c4d92791d0ee','797cd4ee-1a40-4f19-89bd-c30559b2401c','2024-12-15 13:50:13.842'),('ad34fe34-f98d-4d74-a4ea-dead325fdeb9','0d537b0e-ba78-4f19-a349-c4d92791d0ee','a61a4fd7-c3e7-4d1d-bc77-91cdd3299fdb','2024-12-17 20:33:19.304');
/*!40000 ALTER TABLE `Favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image_url` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `treatmentDuration` int DEFAULT NULL,
  `averageRating` float DEFAULT NULL,
  `brand_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Product_id_key` (`id`),
  UNIQUE KEY `Product_name_key` (`name`),
  KEY `Product_brand_id_fkey` (`brand_id`),
  CONSTRAINT `Product_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `Brand` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` VALUES ('797cd4ee-1a40-4f19-89bd-c30559b2401c','Product 4','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',27.50,'https://www.pharmashopdiscount.com/mbFiles/images/bebe-enfants/complements-alimentaires/thumbs/198x198/pediakid-sirop-nez-gorge-125ml.jpg','2024-11-22 12:47:20',8,3,'6031ca6a-b4b8-4037-b40a-eb969b4231fb'),('7e2b16b6-1e88-400e-8a27-c57510ab0a1e','Product 2','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',40.00,'https://www.pharmashopdiscount.com/mbFiles/images/bebe-enfants/complements-alimentaires/thumbs/198x198/pediakid-sirop-nez-gorge-125ml.jpg','2024-11-22 12:46:29',6,1,'42f46d80-d8cd-4312-be1e-fe5d1bfbf43c'),('a61a4fd7-c3e7-4d1d-bc77-91cdd3299fdb','Product 1','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',40.00,'https://www.pharmashopdiscount.com/mbFiles/images/bebe-enfants/complements-alimentaires/thumbs/198x198/pediakid-sirop-nez-gorge-125ml.jpg','2024-11-22 12:46:17',6,5,'1a2e00fe-a3a9-49bb-a1c9-7ea24589780c'),('ba278925-88f5-4b6f-9156-b14935e12c9c','Product 3','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',20.00,'https://www.pharmashopdiscount.com/mbFiles/images/bebe-enfants/complements-alimentaires/thumbs/198x198/pediakid-sirop-nez-gorge-125ml.jpg','2024-11-22 12:46:47',3,2,'5bcd1b57-01c5-4cc3-8c2b-f6c6cc157ecf'),('dac685a9-f35d-40d7-9e75-c953aa3d96bc','Product 5','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',55.99,'https://www.pharmashopdiscount.com/mbFiles/images/bebe-enfants/complements-alimentaires/thumbs/198x198/pediakid-sirop-nez-gorge-125ml.jpg','2024-11-22 12:47:46',12,3.5,'af58e669-394d-485d-ad7f-e9ad9aaadfd9');
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ProductCategory`
--

DROP TABLE IF EXISTS `ProductCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductCategory` (
  `product_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`product_id`,`category_id`),
  KEY `ProductCategory_category_id_fkey` (`category_id`),
  CONSTRAINT `ProductCategory_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ProductCategory_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProductCategory`
--

LOCK TABLES `ProductCategory` WRITE;
/*!40000 ALTER TABLE `ProductCategory` DISABLE KEYS */;
/*!40000 ALTER TABLE `ProductCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Review`
--

DROP TABLE IF EXISTS `Review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Review` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` int NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `product_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Review_user_id_product_id_key` (`user_id`,`product_id`),
  KEY `Review_Product_fkey` (`product_id`),
  CONSTRAINT `Review_Product_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Review_User_fkey` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Review`
--

LOCK TABLES `Review` WRITE;
/*!40000 ALTER TABLE `Review` DISABLE KEYS */;
INSERT INTO `Review` VALUES ('3b210379-2475-495c-bd4a-81bc6dd13c14',2,'Tetst','2024-12-20 10:45:26.164','7e2b16b6-1e88-400e-8a27-c57510ab0a1e','0d537b0e-ba78-4f19-a349-c4d92791d0ee'),('7ab272c4-d454-4d0a-bc23-084abff69ff5',5,'Great','2024-12-15 12:56:44.862','797cd4ee-1a40-4f19-89bd-c30559b2401c','0d537b0e-ba78-4f19-a349-c4d92791d0ee'),('e705502f-f8b5-491d-a45f-f99d851ab196',0,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat eveniet, voluptas corrupti eos eligendi cumque facilis ut voluptatibus tempore, nobis, quibusdam deleniti quod fugit sunt impedit necessitatibus! Voluptas, eligendi!','2024-12-20 10:48:03.297','a61a4fd7-c3e7-4d1d-bc77-91cdd3299fdb','0d537b0e-ba78-4f19-a349-c4d92791d0ee');
/*!40000 ALTER TABLE `Review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'null',
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('0d537b0e-ba78-4f19-a349-c4d92791d0ee','John','Doe','John@doe.com','$2b$10$13EOq4q0yRKgR3DXpCaZF.U.gGRBI4QxohIepwhgmgiFXE8tcaOhS','2024-12-15 11:56:04','M','user');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-04 21:49:02
