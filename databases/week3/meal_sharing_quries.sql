-- Add a new meal
INSERT INTO meal (title, description, location, meal_time, max_reservations, price)
VALUES ('Chicken Biriyani', 'Chettinadu style chicken biriyani ', 'Indian Spice Søborg', '2023-04-23 08:00:00', 10,
        500.00),
       ('Lasange', 'Layers of pasta with beef, tomato sauce & mozzarella', 'Delicasa Lyngby', '2023-04-23 12:30:00', 8,
        2000.00),
       ('Idly vada', 'Authentic Madras style idly vada with sambar and four chutneys', 'Madras Kitchen Lyngby',
        '2023-04-23 16:00:00', 6, 250.00),
       ('Chicken soup', 'Tasty chicken soup with sides', 'Tasty soup valby', '2023-04-23 18:00:00', 4, 700.00),
       ('Butter Chicken', 'Creamy butter chicken either with naan or rice', 'Mumbai Indian valby',
        '2023-04-24 08:00:00', 10, 500.00),
       ('Lassi and Fish Cutlet', 'Delicious mango lassi with crispy fish cutlet', 'Indian Royal copenhagen',
        '2023-04-24 12:30:00', 8,
        2000.00),
       ('Hydrabad dum Biriyani', 'Flavourful Hydrabadi dum biriyani with tender goat meat', 'Indian spice søborg',
        '2023-04-24 16:00:00', 6, 250.00),
       ('Mutton Chukka with Rice', 'Chettinadu mutton chukka', 'Madras Kitchen søborg', '2023-04-24 18:00:00', 4,
        700.00);

-- Add a new reservation
INSERT INTO reservation (`number_of_guests`, `meal_id`, `contact_number`, `contact_name`, `contact_email`)
VALUES (2, 3, '1234567', 'Shobana', 'shobana@email.com'),
       (7, 5, '8723088', 'Mathiarul', 'mathiarul@email.com'),
       (8, 1, '1230107', 'Kavin', 'kavin@email.com'),
       (2, 7, '4532335', 'Karunya', 'karunya@email.com'),
       (4, 2, '7557567', 'Siddhu', 'siddhu@email.com'),
       (3, 3, '2299738', 'Sukumar', 'sukumar@email.com'),
       (2, 8, '4565637', 'yeswanth', 'yeswanth@email.com'),
       (5, 6, '3733567', 'ram', 'ram@email.com'),
       (2, 4, '2288854', 'Saro', 'saro@email.com'),
       (1, 3, '9933444', 'Sathya', 'sathya@email.com'),
       (4, 7, '8833231', 'shenba', 'shenba@email.com');

-- Add a new review
INSERT INTO review (title, description, meal_id, stars)
VALUES ('Good', 'taste was very nice', 3, 3),
       ('Excellent', 'great food! I liked it', 6, 5),
       ('Average', 'It was an average taste', 4, 2),
       ('bad', 'The food was really bad', 7, 1),
       ('Excellent', 'Must try item!!', 8, 5),
       ('good', 'Good one. must try', 2, 4),
       ('bad', 'Very bad! I dont liked it', 7, 1),
       ('Excellent', 'Perfect!  must try', 2, 5);


-- Get all meals
select *
from meal;

-- Get a meal with any id, fx 1
select *
from meal
where id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal
set title = 'Morning food'
where id = 1;

-- Delete a meal with any id, fx 1
delete
from meal
where id = 1;


-- Get all reservation
select *
from reservation;

-- Get a reservation with any id, fx 1
select *
from reservation
where id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation
set contact_name = 'Kavin'
where id = 1;

-- Delete a meal with any id, fx 1
delete
from reservation
where id = 1;


-- Get all review
SELECT *
FROM review;

-- Get a review with any id, fx 1
select *
from review
where id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review
set title = 'perfect'
where id = 2;

-- Delete a review with any id, fx 1
delete
from review
where id = 1;


-- //***   Additional queries   ****//

-- Get meals that has a price smaller than a specific price fx 90
select title,description
from meal
where price < 500;

-- Get meals that still has available reservations
select m.title, m.max_reservations, (m.max_reservations - sum(r.number_of_guests)) as available_reservation
from meal m
         join reservation r on m.id = r.meal_id
group by m.id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select title, description
from meal
where meal.description like '%Chicken%';


-- Get meals that has been created between two dates
select title, description, date(created_date) as created_date
from meal
where date(created_date) >= '2023-01-21'
  and date(created_date) <= '2023-01-24';

-- Get only specific number of meals fx return only 5 meals
select title, description
from meal
where location like '%Søborg'
limit 5;

-- Get the meals that have good reviews
select m.title, r.stars, r.title, r.description
from meal m
         join review r on m.id = r.meal_id
where r.stars >= 3;

-- Get reservations for a specific meal sorted by created_date
select r.contact_name,r.number_of_guests , m.title
from reservation r
         join meal m on m.id = r.meal_id
where m.title = 'Butter Chicken'
order by r.created_date desc;

-- Sort all meals by average number of stars in the reviews
select m.title, avg(r.stars) as average_number_of_stars
from review r
         join meal m on m.id = r.meal_id
group by m.id
order by average_number_of_stars desc;




