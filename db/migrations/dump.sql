-- Adminer 4.6.3 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `actors`;
CREATE TABLE `actors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `history` varchar(510) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `actors` (`id`, `image`, `name`, `age`, `weight`, `history`) VALUES
(1,	'https://static.wikia.nocookie.net/doblaje/images/0/09/Arnold-Schwarzenegger.jpg/revision/latest/top-crop/width/360/height/450?cb=20190615124424&path-prefix=es',	'Arnold Perez',	75,	100,	'Loren dsjgfldjkflkdfhlSDJKfh lkjdfhlk jlDKSFJh lKSDJfhsdlkjfhlsdjfhsdlkjfh'),
(2,	'https://upload.wikimedia.org/wikipedia/commons/1/12/Florencia_de_la_V_%282012%29.jpg',	'Juan Perez updated2',	45,	76,	''),
(3,	'https://upload.wikimedia.org/wikipedia/commons/1/12/Florencia_de_la_V_%282012%29.jpg',	'Flor Perez',	40,	70,	'historia qwer qwerqwerwer q werqwerqwer qwerqwerqwer q werqwer)'),
(5,	'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Luca_Prodan.jpg/250px-Luca_Prodan.jpg',	'Luca Prodan',	35,	70,	'historia 55 qwer qwerqwerwer q werqwerqwer qwerqwerqwer q werqwer)'),
(6,	'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Luca_Prodan.jpg/250px-Luca_Prodan.jpg',	'pablo Prodan',	45,	60,	'historia 5njjhjdbndjjdj  qwer qwerqwerwer q werqwerqwer qwerqwerqwer q werqwer)'),
(7,	'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Luca_Prodan.jpg/250px-Luca_Prodan.jpg',	'pablo Maso',	20,	68,	'hiasdfgh  ksdjfgajksd fljk lsdjk fherqwerwer q werqwerqwer qwerqwerqwer q werqwer)');

DROP TABLE IF EXISTS `actor_movie`;
CREATE TABLE `actor_movie` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `actorId` int(11) unsigned NOT NULL,
  `movieId` int(11) unsigned NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `actorId` (`actorId`),
  KEY `movieId` (`movieId`),
  CONSTRAINT `actor_movie_ibfk_1` FOREIGN KEY (`actorId`) REFERENCES `actors` (`id`),
  CONSTRAINT `actor_movie_ibfk_2` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `actor_movie` (`id`, `actorId`, `movieId`, `createdAt`, `updatedAt`) VALUES
(1,	1,	2,	'2021-09-05 01:39:13',	'2021-09-05 01:39:13'),
(2,	1,	5,	'2021-09-05 01:39:28',	'2021-09-05 01:39:28'),
(3,	2,	1,	'2021-09-05 01:39:57',	'2021-09-05 01:39:57'),
(4,	2,	2,	'2021-09-05 01:40:22',	'2021-09-05 01:40:22'),
(5,	2,	3,	'2021-09-05 01:40:46',	'2021-09-05 01:40:46'),
(6,	3,	2,	'2021-09-05 01:41:01',	'2021-09-05 01:41:01'),
(7,	3,	5,	'2021-09-05 01:41:20',	'2021-09-05 01:41:20'),
(8,	6,	5,	'2021-09-05 01:46:42',	'2021-09-05 01:46:42'),
(12,	5,	1,	'2021-09-05 01:47:41',	'2021-09-05 01:47:41'),
(13,	5,	2,	'2021-09-05 01:48:12',	'2021-09-05 01:48:12'),
(14,	7,	2,	'2021-09-05 01:48:33',	'2021-09-05 01:48:33'),
(15,	7,	3,	'2021-09-05 01:48:41',	'2021-09-05 01:48:41'),
(16,	7,	4,	'2021-09-05 01:48:52',	'2021-09-05 01:48:52'),
(17,	7,	5,	'2021-09-05 01:49:03',	'2021-09-05 01:49:03'),
(18,	5,	10,	'2021-09-07 20:27:47',	'2021-09-07 20:27:47'),
(19,	6,	6,	'2021-09-07 20:28:14',	'2021-09-07 20:28:14');

DROP TABLE IF EXISTS `genres`;
CREATE TABLE `genres` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `genres` (`id`, `name`, `image`, `createdAt`, `updatedAt`) VALUES
(1,	'action',	'https://images.squarespace-cdn.com/content/v1/5649f3d2e4b0c4ad07cab139/1560508850007-S0ASDO80AP9HZ69SDV52/Ultimate_Action_Movies_Logo.jpg?format=1500w',	'2021-09-02 16:30:32',	'2021-09-02 16:30:32'),
(2,	'Horror',	'https://images-platform.99static.com/yEmQ6jlU_hTOgq9YGpp3teylSGU=/0x0:1050x1050/500x500/top/smart/99designs-contests-attachments/75/75481/attachment_75481610',	'2021-09-02 16:31:54',	'2021-09-02 16:31:54'),
(3,	'Documentary',	'https://www.filmsite.org/images/documentary-genre.jpg',	'2021-09-02 16:35:03',	'2021-09-02 16:35:03');

DROP TABLE IF EXISTS `movies`;
CREATE TABLE `movies` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `genreId` int(11) unsigned DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `stars` int(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `genre_id` (`genreId`),
  CONSTRAINT `movies_ibfk_2` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `movies` (`id`, `genreId`, `title`, `image`, `stars`, `createdAt`, `updatedAt`) VALUES
(1,	1,	'Terminator',	'https://www.enriquedans.com/wp-content/uploads/2019/03/T1-768x512.jpg',	3,	'2021-09-02 20:45:35',	'2021-09-02 20:45:35'),
(2,	2,	'Dark Web',	'https://pics.filmaffinity.com/Eliminado_Dark_Web-824620845-large.jpg',	3,	'2021-09-02 20:51:14',	'2021-09-02 20:51:14'),
(3,	2,	'Ouija',	'https://es.web.img3.acsta.net/pictures/16/06/27/12/51/126212.jpg',	4,	'2021-09-02 20:52:55',	'2021-09-02 20:52:55'),
(4,	2,	'OuijaII',	'https://es.web.img3.acsta.net/pictures/16/06/27/12/51/126212.jpg',	2,	'2021-09-03 18:19:11',	'2021-09-03 18:19:11'),
(5,	2,	'OuijaIII',	'https://es.web.img3.acsta.net/pictures/16/06/27/12/51/126212.jpg',	1,	'2021-09-03 18:51:49',	'2021-09-03 18:51:49'),
(6,	2,	'OuijaIIII',	'https://es.web.img3.acsta.net/pictures/16/06/27/12/51/126212.jpg',	3,	'2021-09-07 00:52:53',	'2021-09-07 00:52:53'),
(10,	1,	'NinjasIIII',	'https://es.web.img3.acsta.net/pictures/16/06/27/12/51/126212.jpg',	1,	'2021-09-07 20:01:54',	'2021-09-07 20:01:54');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(3,	'Enrique',	'Abramzon',	'eabramzon@gmail.com',	'$2a$10$.fg5NCd61wmRSaUfLVFTQ.tksQh94gEVPgZy2Lkro392m./zKTycG',	'2021-09-03 17:59:50',	'2021-09-03 17:59:50'),
(4,	'pepe',	'pig',	'pig@gmail.com',	'$2a$10$rsKfuN/bvha0.wD.RVwKa.bzUigkLMlBVX50oV2ZcfZETdjNwwBRe',	'2021-09-04 21:02:32',	'2021-09-04 21:02:32'),
(5,	'pepa',	'pig',	'pigi@gmail.com',	'$2a$10$pnTtjprB1diEuN1dEl.2fO3NNAAIbVBm0bP6fI0jZGoBr8UKk3ze6',	'2021-09-04 21:14:53',	'2021-09-04 21:14:53'),
(6,	'Nestor',	'nepig',	'nepigi@gmail.com',	'$2a$10$0mjvnpfTN99x9VyEoL8W2uOZYDu4EClcokHmZopfHDQj782ZRVOam',	'2021-09-04 21:26:15',	'2021-09-04 21:26:15'),
(7,	'Rolo',	'reg',	'regi@gmail.com',	'$2a$10$P/dM73DWZAwUUVrY2PyXRuYf57r.BXOUmuC/L8LPuG4E7KEsB4FEe',	'2021-09-07 02:03:54',	'2021-09-07 02:03:54'),
(8,	'Toto',	'rego',	'rego@gmail.com',	'$2a$10$upp31Fv7ChGXR1DTl9yZUewhc6Z12fua4/PYwYQ4v5Ly3rfVVWaaa',	'2021-09-07 17:21:49',	'2021-09-07 17:21:49'),
(9,	'Porota',	'rego',	'pororego@gmail.com',	'$2a$10$mxJ2G92eqA0dKYflmly39.xRsljlhvls6ykLEGa97hJXjUIhLqDTS',	'2021-09-07 17:24:56',	'2021-09-07 17:24:56'),
(10,	'Andres',	'pego',	'pego@gmail.com',	'$2a$10$dnnRylBEcY11zAEPoldJz.GDhdg9Bo8aeBog6kXc7dHiVZ4HBoDPi',	'2021-09-07 17:27:47',	'2021-09-07 17:27:47'),
(11,	'Andrea',	'pegona',	'pegona@gmail.com',	'$2a$10$ROdopkPc8rLmlbqWDlDDbubrO8XyOxjqScE0Fwl0yT2Q1P4MRQhi2',	'2021-09-07 17:29:35',	'2021-09-07 17:29:35'),
(12,	'Rodri',	'pega',	'pena@gmail.com',	'$2a$10$9g/hFrLzVZeT/ni3DpvHTeh0NOWpJdabvH.BucQrmS/xW4Hp.Hp02',	'2021-09-07 17:35:52',	'2021-09-07 17:35:52'),
(13,	'Rodrigo',	'pegado',	'eabramzon@hotmail.com',	'$2a$10$ue.JyU5JWDzI1imss8JeRuAwySU0W9x8Nrd9Z/LNWWsOZljEFDp/W',	'2021-09-07 17:45:20',	'2021-09-07 17:45:20');

-- 2021-09-07 20:31:39