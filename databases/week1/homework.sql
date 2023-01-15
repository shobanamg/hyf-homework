/*
Find out how many tasks are in the task table
Find out how many tasks in the task table do not have a valid due date
Find all the tasks that are marked as done
Find all the tasks that are not marked as done
Get all the tasks, sorted with the most recently created first
Get the single most recently created task
Get the title and due date of all tasks where the title or description contains database
Get the title and status (as text) of all tasks
Get the name of each status, along with a count of how many tasks have that status
Get the names of all statuses, sorted by the status with most tasks first
 */

/* Find out how many tasks are in the task table */
select count(id)
from task;

/* Find out how many tasks in the task table do not have a valid due date */
select count(id)
from task
where due_date is null;

/* Find all the tasks that are marked as done */
select t.id, t.title
from task t
         join status s on t.status_id = s.id
where s.name = 'Done';

/* Find all the tasks that are not marked as done */
select t.*
from task t
         join status s on t.status_id = s.id
where s.name <> 'Done';

/* Get all the tasks, sorted with the most recently created first */
select *
from task
order by created desc;

/* Get the single most recently created task */
select *
from task
order by created desc
limit 1;

/* Get the title and due date of all tasks where the title or description contains database */
select title, description, due_date
from task
where title like '%database%'
   or description like '%database';

/* Get the title and status (as text) of all tasks */
select t.title, s.name
from task t
         join status s on t.status_id = s.id;

/* Get the name of each status, along with a count of how many tasks have that status */
select s.name, count(t.id) as status_count
from task t
         join status s on t.status_id = s.id
group by s.name;

/* Get the names of all statuses, sorted by the status with most tasks first */
select s.name, count(t.id) status_count
from task t
         join status s on t.status_id = s.id
group by s.name
order by status_count desc;












