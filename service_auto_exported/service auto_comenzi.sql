-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: service auto
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comenzi`
--

DROP TABLE IF EXISTS `comenzi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comenzi` (
  `ComandaID` int NOT NULL AUTO_INCREMENT,
  `MasinaID` int DEFAULT NULL,
  `NumeComanda` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `StareComanda` char(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `PretComanda` int DEFAULT NULL,
  `DataInceput` datetime(6) DEFAULT NULL,
  `DataFinal` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`ComandaID`),
  UNIQUE KEY `ComandaID_UNIQUE` (`ComandaID`),
  KEY `FK_MasinaID_idx` (`MasinaID`),
  CONSTRAINT `FK_MasinaID` FOREIGN KEY (`MasinaID`) REFERENCES `masini` (`MasinaID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comenzi`
--

LOCK TABLES `comenzi` WRITE;
/*!40000 ALTER TABLE `comenzi` DISABLE KEYS */;
INSERT INTO `comenzi` VALUES (3,3,'Umflare roata','Finalizata',50,'2021-11-14 00:00:00.000000','2021-11-14 00:00:00.000000'),(5,4,'Schimbare Ambreiaj','In Progres',350,'2021-12-14 00:00:00.000000','2022-02-14 00:00:00.000000'),(6,5,'Inlocuire Planetara','Finalizata',300,'2021-12-14 00:00:00.000000','2021-12-28 00:00:00.000000'),(7,6,'Schimbare Distributie','Finalizata',900,'2021-11-14 00:00:00.000000','2021-12-02 00:00:00.000000'),(8,7,'Schimbare Ambreiaj','Finalizata',500,'2021-10-12 00:00:00.000000','2021-11-05 00:00:00.000000'),(9,8,'Inlocuire DPF','Finalizata',1000,'2021-12-10 00:00:00.000000','2021-12-17 00:00:00.000000'),(10,9,'Schimbare Catalizator','In Progres',400,'2022-01-10 00:00:00.000000','2021-01-27 00:00:00.000000'),(11,11,'Schimbare Ambreiaj','In Progres',1200,'2022-01-15 00:00:00.000000','2021-02-15 00:00:00.000000'),(12,11,'Inlocuire Planetara','Finalizata',500,'2021-11-15 00:00:00.000000','2021-11-25 00:00:00.000000'),(13,12,'Schimbare Distributie','Finalizata',600,'2021-12-07 00:00:00.000000','2021-12-20 00:00:00.000000'),(14,12,'Schimbare Ulei','Finalizata',100,'2021-12-10 00:00:00.000000','2021-12-10 00:00:00.000000');
/*!40000 ALTER TABLE `comenzi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-25 11:36:59
