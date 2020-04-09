const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express()

app.set('port', process.env.port || 3000);
app.set('view engine', 'ejs');

app.listen(app.get('port'), () => {
    console.log('App is running on port 3000')
})