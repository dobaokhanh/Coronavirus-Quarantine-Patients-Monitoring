CREATE DATABASE IF NOT EXISTS coronavirus_quarantine_people_monitoring ;

USE coronavirus_quarantine_people_monitoring;

CREATE TABLE IF NOT EXISTS `users`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `username` varchar(15) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_users_username` (`username`),
  UNIQUE KEY `uk_users_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_roles_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `fk_user_roles_role_id` (`role_id`),
  CONSTRAINT `fk_user_roles_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `fk_user_roles_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `units` (
	`id` bigint(20) auto_increment NOT NULL ,
    `name` varchar(40) NOT NULL,
    `address` varchar(100) NOT NULL,
    
    PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `patients` (
	`id` bigint(20) auto_increment NOT NULL,
    `name` varchar(40) NOT NULL,
    `dob` varchar(30) NOT NULL,
    `address` varchar(100) NOT NULL,
    `email` varchar(40) NOT NULL,
    `phone` varchar(20) NOT NULL,
    `unit_id` bigint(20) NOT NULL,
    
    PRIMARY KEY(`id`),
    CONSTRAINT `fk_patients_units_id` FOREIGN KEY (`unit_id`) REFERENCES `units`(`id`)
);

CREATE TABLE IF NOT EXISTS `daily_check` (
	`id` bigint(20) auto_increment NOT NULL,
    `day_number` varchar(15) NOT NULL,
    `temperature` double NOT NULL default 36,
    `cough` boolean,
    `fever` boolean,
    `exhausted` boolean,
    `shortness_of_breath` boolean,
    `patient_id` bigint(20) NOT NULL,
    
    PRIMARY KEY(`id`),
	CONSTRAINT `fk_daily_check_patients_id` FOREIGN KEY (`patient_id`) REFERENCES `patients`(`id`)
);