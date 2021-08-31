-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 11, 2021 at 11:49 PM
-- Server version: 10.3.27-MariaDB-0+deb10u1
-- PHP Version: 7.3.27-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs230_u190230`
--

-- --------------------------------------------------------

--
-- Table structure for table `USERNAME`
--

CREATE TABLE `USERNAME` (
  `id` int(11) NOT NULL,
  `title` varchar(5) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `surName` varchar(30) NOT NULL,
  `mobileNumber` int(11) NOT NULL,
  `emailAddress` varchar(50) NOT NULL,
  `addressLine1` varchar(20) NOT NULL,
  `addressLine2` varchar(20) NOT NULL,
  `town` varchar(20) NOT NULL,
  `county` varchar(20) NOT NULL,
  `eircode` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `USERNAME`
--

INSERT INTO `USERNAME` (`id`, `title`, `firstName`, `surName`, `mobileNumber`, `emailAddress`, `addressLine1`, `addressLine2`, `town`, `county`, `eircode`) VALUES
(1, 'Mr', 'Rossi', 'Delusi', 876453214, 'rossiDelusi@hotmail.com', 'Spagetti', 'grove ', 'Rathmine', 'Dublin', 'D081 1232'),
(5, 'Mr', 'Jacko', 'tacko ', 897541234, 'JackoMaTacko@gmail.com', 'Mocho', 'new mexico', 'maynooth', 'Kildare', 'D091 1243'),
(9, 'Mr', 'jimmy', 'nguyen', 983434334, 'hotspice@kfc.ie', 'chicken', 'wing', 'longford', 'denegal', 'DO302 3023'),
(10, 'Mr', 'tommy', 'shan', 983434334, 'wingchun@hotmail.com', 'Hong kong', 'China', 'longford', 'denegal', 'DO302 3023'),
(18, 'Ms', 'Debbi', 'Lighty', 756932433, 'DLighty@hotmail.com', '38 Bridge ', ' st Cavan', 'Cavan', 'Cavan', 'C2312 7923'),
(19, 'Mr', 'Javier', 'Simpson', 295860294, 'JSimpson@gmail.com', 'Athboy ', 'Gate Trim', 'Trim', 'Meath', 'M4501 8027'),
(20, 'Mr', 'Anton ', 'Jonson', 594939340, 'AntonJ@hotmail.com', 'Brennans Glen', 'Ballyhar', 'Killarney', 'Kerry', 'K3222 1213'),
(22, 'Mr', 'Luigi', 'Hunte', 405964403, 'DHunte@gmail.com', '55 Main ', ' st Midleton', 'Midleton', 'Cork', 'CO211 6534'),
(23, 'Ms', 'Cami', 'Sweeney', 235486508, 'CSweeney@yahoo.ie', 'Raharney ', 'Killucan', 'Killucan', 'Westmeath', 'W6305 4024'),
(25, 'Ms', 'Joy', 'Davidson', 923985392, 'JoyDave@gmail.com', 'Sandy rd', 'Galway', 'Galway', 'Galway', 'G4572 9923'),
(26, 'Ms', 'Haily ', 'Murphy', 815969069, 'HailyMurph@gmail.com', 'North street', 'Coolock', 'Dublin', 'Dublin', 'DO732 4023');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `USERNAME`
--
ALTER TABLE `USERNAME`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `USERNAME`
--
ALTER TABLE `USERNAME`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
