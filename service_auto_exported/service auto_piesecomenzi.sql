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
-- Table structure for table `piesecomenzi`
--

DROP TABLE IF EXISTS `piesecomenzi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `piesecomenzi` (
  `PiesaID` int NOT NULL,
  `ComandaID` int NOT NULL,
  PRIMARY KEY (`PiesaID`,`ComandaID`),
  KEY `FK_PieseComenzi_Comenzi_idx` (`ComandaID`),
  CONSTRAINT `FK_PieseComenzi_Comenzi` FOREIGN KEY (`ComandaID`) REFERENCES `comenzi` (`ComandaID`),
  CONSTRAINT `FK_PieseComenzi_Piese` FOREIGN KEY (`PiesaID`) REFERENCES `piese` (`PiesaID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `piesecomenzi`
--

LOCK TABLES `piesecomenzi` WRITE;
/*!40000 ALTER TABLE `piesecomenzi` DISABLE KEYS */;
INSERT INTO `piesecomenzi` VALUES (10012,3),(10006,5),(10009,6),(10012,6),(10005,7),(10011,7),(10000,8),(10007,9),(10008,10),(10011,10),(10000,11),(10002,12),(10011,12),(10012,12),(10010,13),(10011,14);
/*!40000 ALTER TABLE `piesecomenzi` ENABLE KEYS */;
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
