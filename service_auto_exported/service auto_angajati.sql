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
-- Table structure for table `angajati`
--

DROP TABLE IF EXISTS `angajati`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `angajati` (
  `AngajatID` int NOT NULL AUTO_INCREMENT,
  `ManagerID` int DEFAULT '1000',
  `Nume` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Prenume` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `CNP` char(13) NOT NULL,
  `Oras` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Judet` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Sex` char(1) DEFAULT 'F',
  `DataNasterii` datetime DEFAULT NULL,
  `DataAngajarii` datetime DEFAULT NULL,
  `Salariu` decimal(8,2) NOT NULL,
  PRIMARY KEY (`AngajatID`),
  UNIQUE KEY `IX_Angajati` (`AngajatID`),
  KEY `FK_Angajati_Angajati_idx` (`ManagerID`),
  CONSTRAINT `FK_Angajati_Angajati` FOREIGN KEY (`ManagerID`) REFERENCES `angajati` (`AngajatID`)
) ENGINE=InnoDB AUTO_INCREMENT=3011 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `angajati`
--

LOCK TABLES `angajati` WRITE;
/*!40000 ALTER TABLE `angajati` DISABLE KEYS */;
INSERT INTO `angajati` VALUES (1000,NULL,'Birlez','Dimitrie','5000111111111','Bucuresti','Bucuresti','M','2000-08-16 00:00:00','2021-11-23 00:00:00',10000.00),(2000,1000,'Alexandrescu','Cristian','5000222222222','Bucuresti','Bucuresti','M','2002-07-23 00:00:00','2020-10-21 00:00:00',3000.00),(3005,1000,'x','x','x','x','x','x','2016-08-20 00:00:00','2011-07-20 21:00:00',2000.00),(3006,1000,'Capatana','Andrei','5123456712345','Bucuresti','Bucuresti','M','2013-02-20 01:00:00','2005-01-20 22:00:00',2500.00),(3007,1000,'Vornic','Alexandru','5123456754321','Buzau','Buzau','M','2012-09-20 01:00:00','2003-07-20 21:00:00',2200.00),(3008,1000,'Mandruta','Florica','6432156754321','Iasi','Iasi','F','2014-10-20 02:00:00','2008-08-20 21:00:00',3200.00),(3009,1000,'Lovin','Catalin','5432112344321','Arges','Pitesti','M','2014-10-20 01:00:00','2009-09-20 21:00:00',4200.00),(3010,1000,'Neagu','Irina','6123412344321','Bucuresti','Bucuresti','F','2014-10-20 00:00:00','2009-09-20 21:00:00',3200.00);
/*!40000 ALTER TABLE `angajati` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-25 11:37:00
