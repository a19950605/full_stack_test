-- Active: 1656417298517@@127.0.0.1@3307@testdb

CREATE TABLE IF NOT EXISTS `subscriptions` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    general BOOLEAN DEFAULT false,
    specialist BOOLEAN DEFAULT false,
    physiotherapy BOOLEAN DEFAULT false,
    extraOne BOOLEAN DEFAULT false,
    extraTwo BOOLEAN DEFAULT false
) ENGINE = InnoDB DEFAULT CHARSET = utf8;