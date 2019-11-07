// Initializing our packages from npm
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// view engine setup
/**
 * 1. register our view engine
 * 2. define the path to our view engine
 * 3. tell expressJS what template engine to use 
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Server Configuration
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Gives the client access to static files (in public folder)
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes / Controller
 */
const homeController = require('./controllers/home');
app.use('/', homeController)

/**
 * Start Server
 */
app.listen(777);