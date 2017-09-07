var express = require('express');
var path = reuire('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
require('dotenv').config();
var session = require('express-session');
var passport = require('passport');
require('./config/database');
require('./config/passport');



var app = express();

app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookiePaaser());
app.user(session({
    secret: 'PostIt!',
    resave:false,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


app.use(require('.config/auth'));

//api routes before catch alll 
app.use('/api/users', require('./routes/api/users'));

app.use('/api', require('./routes/api'));



//catch all route that returns html 

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3000 || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});