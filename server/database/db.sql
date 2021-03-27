CREATE DATABASE instaclondb;

USE instaclondb;

CREATE TABLE users(
  idUser INT(11) AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL
);

DESCRIBE users;

CREATE TABLE photo (
  idPhoto INT(11) AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  idUser INT(11) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY (idUser) REFERENCES users(idUser)
);

DESCRIBE photo;


INSERT INTO users (userName, password)
VALUES ('example1', 'example1');
