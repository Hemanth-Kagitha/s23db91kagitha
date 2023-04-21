var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//1
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});


//3
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


var kite = require("./models/kite");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var kiteRouter = require('./routes/kite');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var kite = require('./models/kite');
var resourceRouter = require('./routes/resource');


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
  }));


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/kite', kiteRouter);
app.use('/board', boardRouter);
app.use('/selector',selectorRouter);
app.use('/resource',resourceRouter);


async function recreateDB(){
  // Delete everything
  await kite.deleteMany();
  let instance1 = new kite({Kite_color:"Blue",Kite_length:"12m",Kite_cost:"$55", Kite_sides:"Equal"});
  
  instance1.save().then( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
 
 let instance2 = new kite({Kite_color:"Green",Kite_length:"19m",Kite_cost:"$100", Kite_sides:"Not Equal"});
  
  instance2.save().then( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
  });
 
 let instance3 = new kite({Kite_color:"Red",Kite_length:"15m",Kite_cost:"$70", Kite_sides:"Equal"});
  
  instance3.save().then( function(err,doc) {
  if(err) return console.error(err);
  console.log("Third object saved")
  });
}
 let reseed = true;
 if (reseed) { recreateDB();}

 // passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
