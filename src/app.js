const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express()

//Importing the routes
const studentRoutes = require('./routes/student');

//Settings
app.set('port', process.env.port || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'student_info'
}, 'single'));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', studentRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('App is running on port 3000')
})