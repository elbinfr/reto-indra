CREATE TABLE `cards` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `owner` varchar(50),
  `card_number` varchar(20),
  `cvv` varchar(3),
  `expiration_month` integer,
  `expiration_year` integer
);