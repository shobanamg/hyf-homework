/*  Part 1: Working with tasks
 Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
Change the title of a task
Change a task due date
Change a task status
Mark a task as complete
Delete a task
 */
USE  `hyfmodels`;

select * from user;

/*  Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id */
insert into task (title, description, created, updated, due_date, status_id, user_id)
values ('read a book', 'Maybe something about parenting?', '2023-01-11 06:14:01', '2023-01-11 06:14',
        '2023-02-11 06:14:01', 2, 7);

/* Change the title of a task */
UPDATE task
SET title = 'do exercise'
WHERE id = 36;

/* Change a task due date */
UPDATE task
SET due_date = '2023-12-22 20:58:03'
WHERE status_id <> 3;

/* Change a task status */
UPDATE task
SET status_id = 1
WHERE id = 5;

/* Mark a task as complete */
UPDATE task
SET status_id = 3
WHERE id = 5;

/* Delete a task */
delete from task
where id = 37;



