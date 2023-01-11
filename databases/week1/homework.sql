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
select count(*)
from task;

select count(*)
from task
where due_date is null;

select t.*
from task t
         join status s on t.status_id = s.id
where s.name = 'Done';

select t.*
from task t
         join status s on t.status_id = s.id
where s.name <> 'Done';

select *
from task
order by created desc;

select *
from task
order by created desc
limit 1;

select title, description, due_date
from task
where title like '%database%'
   or description like '%database';

select t.title, s.name
from task t
         join status s on t.status_id = s.id;

select s.name, count(s.id) status_count
from task t
         join status s on t.status_id = s.id
group by s.id;

select s.name, count(s.id) status_count
from task t
         join status s on t.status_id = s.id
group by s.id
order by status_count desc;











