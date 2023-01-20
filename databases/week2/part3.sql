/*
Get all the tasks assigned to users whose email ends in @spotify.com
Get all the tasks for 'Donald Duck' with status 'Not started'
Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
Find how many tasks where created in each month, e.g. how many tasks were created in october,
 how many tasks were created in november, etc. (hint: use group by)
 */
use `hyfmodels2`;

/*  Get all the tasks assigned to users whose email ends in @spotify.com */
select u.id, u.name, u.email, ut.task_id, t.title
from user u
         join user_task ut on u.id = ut.user_id
         join task t on ut.task_id = t.id
where email like '%@spotify.com';

/*  Get all the tasks for 'Donald Duck' with status 'Not started' */
select u.id, u.name, ut.task_id, t.title, s.name
from user u
         join user_task ut on u.id = ut.user_id
         join task t on ut.task_id = t.id
         join status s on t.status_id = s.id
where u.name = 'Donald Duck'
  and s.name = 'Not started';

/* Get all the tasks for 'Maryrose Meadows' that were created in september
   (hint: month(created)=month_number) */
select t.title, u.name, month(t.created)
from user u
         join user_task ut on u.id = ut.user_id
         join task t on ut.task_id = t.id
where month(t.created) = 9 and
        u.name = 'Maryrose Meadows';

/* Find how many tasks where created in each month, e.g. how many tasks were created in october,
 how many tasks were created in november, etc. (hint: use group by) */
select monthname(t.created) as month, count(t.id) as total_tasks from task t group by monthname(t.created)




