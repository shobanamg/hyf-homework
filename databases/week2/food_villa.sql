
DROP DATABASE IF EXISTS food_villa;

CREATE DATABASE IF NOT EXISTS food_villa;

USE food_villa;

CREATE TABLE customer (
                          customer_id INT(11) AUTO_INCREMENT PRIMARY KEY,
                          first_name VARCHAR(30) NOT NULL,
                          last_name VARCHAR(30) NOT NULL,
                          middle_name VARCHAR(30) NOT NULL,
                          email VARCHAR(50) NOT NULL,
                          phone_number VARCHAR(15) NOT NULL,
                          landline VARCHAR(15) NOT NULL,
                          profile_image BLOB NOT NULL,
                          username VARCHAR(30) NOT NULL,
                          password VARCHAR(30) NOT NULL,
                          account_status INT(11) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE menu_type (
                           id INT(11) AUTO_INCREMENT PRIMARY KEY,
                           type_name VARCHAR(50) NOT NULL,
                           description VARCHAR(100) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE menu (
                      menu_id INT(11) AUTO_INCREMENT PRIMARY KEY,
                      menu_name VARCHAR(100) NOT NULL,
                      price FLOAT NOT NULL,
                      menu_type_id INT(11) NOT NULL,
                      menu_image BLOB NOT NULL,
                      ingredients VARCHAR(500) NOT NULL,
                      menu_status INT(11) NOT NULL,
                      CONSTRAINT menu_fk_1 FOREIGN KEY (menu_type_id)
                          REFERENCES menu_type (id)
                          ON UPDATE CASCADE ON DELETE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE INDEX menu_type_id
    ON menu (menu_type_id);

CREATE TABLE rating (
                        rating_id INT(11) AUTO_INCREMENT PRIMARY KEY,
                        menu_id INT(11) NOT NULL,
                        score INT(11) NOT NULL,
                        remarks VARCHAR(100) NOT NULL,
                        date_recorded DATE NOT NULL,
                        customer_id INT(11) NOT NULL,
                        CONSTRAINT rating_fk_1 FOREIGN KEY (menu_id)
                            REFERENCES menu (menu_id)
                            ON UPDATE CASCADE ON DELETE CASCADE,
                        CONSTRAINT rating_fk_2 FOREIGN KEY (customer_id)
                            REFERENCES customer (customer_id)
                            ON UPDATE CASCADE ON DELETE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE INDEX customer_id
    ON rating (customer_id);

CREATE INDEX menu_id
    ON rating (menu_id);

CREATE TABLE user (
                      user_id INT(11) AUTO_INCREMENT PRIMARY KEY,
                      full_name VARCHAR(100) NOT NULL,
                      contact VARCHAR(50) NOT NULL,
                      email_address VARCHAR(50) NOT NULL,
                      username VARCHAR(30) NOT NULL,
                      password VARCHAR(30) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE orders (
                        order_id INT(11) AUTO_INCREMENT PRIMARY KEY,
                        customer_id INT(11) NOT NULL,
                        order_date DATE NOT NULL,
                        total_amount FLOAT NOT NULL,
                        order_status INT(11) NOT NULL,
                        processed_by INT(11) NOT NULL,
                        CONSTRAINT order_fk_1 FOREIGN KEY (processed_by)
                            REFERENCES user (user_id)
                            ON UPDATE CASCADE ON DELETE CASCADE,
                        CONSTRAINT order_fk_2 FOREIGN KEY (customer_id)
                            REFERENCES customer (customer_id)
                            ON UPDATE CASCADE ON DELETE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE INDEX customer_id
    ON orders (customer_id, processed_by);

CREATE INDEX processed_by
    ON orders (processed_by);

CREATE TABLE order_details (
                               order_details_id INT(11) AUTO_INCREMENT PRIMARY KEY,
                               order_id INT(11) NOT NULL,
                               menu_id INT(11) NOT NULL,
                               amount FLOAT NOT NULL,
                               no_of_serving INT(11) NOT NULL,
                               total_amount FLOAT NOT NULL,
                               CONSTRAINT order_details_fk_1 FOREIGN KEY (menu_id)
                                   REFERENCES menu (menu_id)
                                   ON UPDATE CASCADE ON DELETE CASCADE,
                               CONSTRAINT order_details_fk_2 FOREIGN KEY (order_id)
                                   REFERENCES orders (order_id)
                                   ON UPDATE CASCADE ON DELETE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE INDEX menu_id
    ON order_details (menu_id);

CREATE INDEX order_id
    ON order_details (order_id, menu_id);

CREATE TABLE payment (
                         payment_id INT(11) AUTO_INCREMENT PRIMARY KEY,
                         order_id INT(11) NOT NULL,
                         amount FLOAT NOT NULL,
                         paid_by VARCHAR(50) NOT NULL,
                         payment_date DATE NOT NULL,
                         processed_by INT(11) NOT NULL,
                         CONSTRAINT payment_fk_1 FOREIGN KEY (processed_by)
                             REFERENCES user (user_id)
                             ON UPDATE CASCADE ON DELETE CASCADE,
                         CONSTRAINT payment_fk_2 FOREIGN KEY (order_id)
                             REFERENCES orders (order_id)
                             ON UPDATE CASCADE ON DELETE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE INDEX order_id
    ON payment (order_id, processed_by);

CREATE INDEX processed_by
    ON payment (processed_by);

CREATE TABLE site_info (
                           site_info_id INT(11) AUTO_INCREMENT PRIMARY KEY,
                           site_name VARCHAR(30) NOT NULL,
                           description VARCHAR(100) NOT NULL,
                           contact_info VARCHAR(15) NOT NULL,
                           address VARCHAR(100) NOT NULL,
                           last_update DATE NOT NULL,
                           user_id INT(11) NOT NULL,
                           CONSTRAINT site_info_fk_1 FOREIGN KEY (user_id)
                               REFERENCES user (user_id)
                               ON UPDATE CASCADE ON DELETE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE INDEX user_id
    ON site_info (user_id);

