-- MySQL dump 10.11
--
-- to install this database, from a terminal, type:
-- mysql -u USERNAME -p -h SERVERNAME simpsons < simpsons.sql
--
-- Host: localhost    Database: simpsons
-- ------------------------------------------------------
-- Server version   5.0.45-log

/*DROP DATABASE IF EXISTS cheapomail;
CREATE DATABASE cheapomail;
USE cheapomail;*/


DROP TABLE IF EXISTS user;
CREATE TABLE user (
id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
first_name VARCHAR(32) DEFAULT NULL, 
last_name VARCHAR(32) DEFAULT NULL, 
password VARCHAR(32) DEFAULT NULL, 
username VARCHAR(32) DEFAULT NULL,
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
body TEXT DEFAULT NULL,
subject VARCHAR(32) DEFAULT NULL, 
user_id INT UNSIGNED NOT NULL,
recipient_ids VARCHAR(255) DEFAULT NULL,
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS message_read;
CREATE TABLE message_read (
id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
message_id INT(11) NOT NULL,
reader_id INT(11) NOT NULL,
date DATE NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO user (first_name, last_name, password, username) VALUES ('Cardinal','Skagen','stuffs','kingclove');
INSERT INTO user (first_name, last_name, password, username) VALUES ('Nemo','Fastlane','supra','north');
INSERT INTO user (first_name, last_name, password, username) VALUES ('Boss','Lady','chineyting','simsima');
INSERT INTO user (first_name, last_name, password, username) VALUES ('North','Pole','freiza','kooler');
INSERT INTO user (first_name, last_name, password, username) VALUES ('Old','Navy','sandals','plastic');
INSERT INTO user (first_name, last_name, password, username) VALUES ('Justice','League','cape','hero');
INSERT INTO user (first_name, last_name, password, username) VALUES ('Orderin','Mycourt','judy','judge');

INSERT INTO messages (body, subject, user_id, recipient_ids) VALUES ('I am the body.','First message','1','23');

-- debug output to just show the contents of all tables
SHOW TABLES;
SELECT * FROM user;
SELECT * FROM messages;
SELECT * FROM message_read;

