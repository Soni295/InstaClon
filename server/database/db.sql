CREATE DATABASE instaclonDB;

USE instaclonDB;

CREATE TABLE users(
  id_user INT(11) AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(16) NOT NULL,
  email VARCHAR(40) NOT NULL,
  password VARCHAR(60) NOT NULL
);

DESCRIBE users;

CREATE TABLE photos (
  id_photo INT(11) AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  id_user INT(11) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY (id_user) REFERENCES users(id_user)
);

DESCRIBE photos;

INSERT INTO users (user_name, email, password)
  VALUES ('example1','example1@hotmail.com', 'example1');
