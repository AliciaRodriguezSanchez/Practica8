-- MySQL dump 10.13  Distrib 9.6.0, for macos14.8 (arm64)
--
-- Host: localhost    Database: post_db
-- ------------------------------------------------------
-- Server version	9.6.0

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
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Juan Pérez','juan.perez@email.com','juan.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(2,'María García','maria.garcia@email.com','maria.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(3,'Carlos López','carlos.lopez@email.com','carlos.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(4,'Ana Martínez','ana.martinez@email.com','ana.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(5,'Pedro Sánchez','pedro.sanchez@email.com','pedro.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(6,'Laura Fernández','laura.fernandez@email.com','laura.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(7,'Miguel Torres','miguel.torres@email.com','miguel.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(8,'Sofía Ruiz','sofia.ruiz@email.com','sofia.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(9,'David Romero','david.romero@email.com','david.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(10,'Elena Navarro','elena.navarro@email.com','elena.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(11,'Javier Moreno','javier.moreno@email.com','javier.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(12,'Paula Jiménez','paula.jimenez@email.com','paula.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(13,'Alberto Castro','alberto.castro@email.com','alberto.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(14,'Cristina Vega','cristina.vega@email.com','cristina.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(15,'Raúl Herrera','raul.herrera@email.com','raul.jpg','2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(16,'Hugo','hugo@gmail.com','','2026-06-13 08:00:53','2026-06-13 08:00:53',NULL),(18,'David Rodrígez','david@gmail.com','david2.jpg','2026-06-13 08:30:58','2026-06-13 12:41:13',NULL),(19,'elena','elena@gmail.com','elena.jpg','2026-06-13 08:31:22','2026-06-13 08:31:22',NULL),(20,'rosa','rosa@gmail.com','rosa.jpg','2026-06-13 08:32:31','2026-06-13 08:32:31',NULL);
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` bigint NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_posts_author` (`author_id`),
  CONSTRAINT `fk_posts_author` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Post actualizado','Contenido actualizado','opinion',1,'2026-06-12 05:03:08','2026-06-13 12:50:10',NULL),(2,'Aprendiendo Node.js','Primeros pasos para crear APIs REST con Node y Express.','Tecnología',2,'2026-06-12 05:03:08','2026-06-12 05:03:08',NULL),(3,'Patrones de diseño frontend','Principales patrones utilizados en aplicaciones modernas.','Desarrollo',3,'2026-06-12 05:03:08','2026-06-12 05:03:08',NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-13 15:23:42
