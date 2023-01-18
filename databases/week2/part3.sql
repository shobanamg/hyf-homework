/*
 Part 2: School database
Create a new database containing the following tables:
Class: with the columns: id, name, begins (date), ends (date)
Student: with the columns: id, name, email, phone, class_id (foreign key)


If you are done with the above tasks, you can continue with these advanced tasks:
Create an index on the name column of the student table.
Add a new column to the class table named status which can only have the following
   values: not-started, ongoing, finished (hint: enumerations).
 */

SET NAMES utf8mb4;

create database if not exists `hyfschool`;

use `hyfschool`;



drop table if exists `student`;

drop table if exists `class`;


CREATE TABLE `class` (
                         `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
                         `name` varchar(255) NOT NULL,
                         `begins`  DATE NOT NULL,
                         `ends`  DATE  NULL,
                         PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
                           `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
                           `name` varchar(255) NOT NULL,
                           `email` varchar(255) NOT NULL,
                           `phone` varchar(255) NULL,
                           `class_id` int(10) unsigned NOT NULL,
                           PRIMARY KEY (`id`),
                           CONSTRAINT `fk_student` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


insert into class ( name, begins, ends) values ( 'maths','2017-09-26' , null);
insert into class ( name, begins, ends) values ( 'science', '2015-03-08' , '2020-05-12');
insert into class ( name, begins, ends) values ( 'english',  '2020-09-26' , null);

insert into student ( name, email, phone, class_id) values ( 'Lucila Tiger', 'lucilatiger@lulu.com','635-572-8467' , 1);
insert into student ( name, email, phone, class_id) values ( 'Hosea Jack', 'hoseajack@nymag.com',  '302-678-7931' , 2);
insert into student ( name, email, phone, class_id) values ( 'Jeffie Pernell', 'jfrenold@comcast.net', '891-952-6749' ,3);


/* advanced tasks: */
CREATE INDEX index_name
    ON student (name);

ALTER TABLE class
    ADD status ENUM('not-started', 'ongoing', 'finished') not null default 'not-started';
