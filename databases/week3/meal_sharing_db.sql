CREATE DATABASE IF NOT EXISTS meal_sharing;

USE meal_sharing;

CREATE TABLE meal(
                     id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                     title VARCHAR(255) NOT NULL,
                     description TEXT NULL DEFAULT NULL,
                     location VARCHAR(255) NOT NULL,
                     meal_time DATETIME NULL DEFAULT NULL,
                     max_reservations INT NOT NULL,
                     price DECIMAL(10,2) NOT NULL,
                     created_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                     updated_date DATETIME NULL ON UPDATE CURRENT_TIMESTAMP
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;
CREATE INDEX location
    ON meal (location);

CREATE TABLE reservation(
                            id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            number_of_guests INT UNSIGNED NOT NULL,
                            meal_id INT(11) UNSIGNED NOT NULL,
                            created_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                            updated_date DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,
                            contact_number VARCHAR(15) NOT NULL,
                            contact_name VARCHAR(30) NOT NULL,
                            contact_email VARCHAR(50) NOT NULL,
                            CONSTRAINT fk_reservation_meal FOREIGN KEY (meal_id) REFERENCES meal (id) ON UPDATE CASCADE ON DELETE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;



CREATE TABLE review(
                       id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                       title VARCHAR(255) NOT NULL,
                       description TEXT NULL DEFAULT NULL,
                       meal_id INT(11) UNSIGNED NOT NULL,
                       stars TINYINT UNSIGNED NOT NULL CHECK (
                                   stars > 0
                               AND stars <= 5
                           ),
                       created_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                       updated_date DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,
                       CONSTRAINT fk_review_meal FOREIGN KEY (meal_id) REFERENCES meal (id) ON UPDATE CASCADE ON DELETE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;
CREATE INDEX stars
    ON review (stars);

