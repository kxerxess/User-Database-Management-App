# Major-Project
Major Project for WD Feb 20 - Mar 20

--------------------------------------------------------------

Description : Creating User Management System
1. Creating User Database
2. Collecting User info from front end forms
3. Showing user info in table
4. Updating user info from front end forms
5. Implementing Rest API from NODE and Express to handle user requests to Creating User, Updating User, Reading users, Deleting users 

---------------------------------------------------------------

Database Details:

Database name: student_info.
Tables: student.

Field           Type                Null    Key    Default     Extra
id              int(10) unsigned    NO      PRI    NULL        auto_increment
name            varchar(50)         NO             NULL
college_name    varchar(100)        NO             NULL
contact         varchar(15)         YES            NULL
age             int(3) unsigned     NO             NULL

--------------------------------------------------------------

Copy and paste the following commands in SQL query to create the database given above:

create DATABASE student_info;
create TABLE student (
  id int(10) unsigned auto_increment primary key,
  name varchar(50) not null,
  college_name varchar(100) not null,
  contact varchar(15),
  age int(3) unsigned not null
 );

---------------------------------------------------------------

Instructions:
1. Create a database using above mentioned instructions.
2. Run database on port 3306.
3. Open 'Run App.bat' from the root directory.
4. If a browser window doesnt open automatically, opn one manaully and enter 'localhost:3000' without the quotes in the url.

---------------------------------------------------------------
