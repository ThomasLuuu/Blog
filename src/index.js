const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const db = require('./config/db');
const route = require('./routes');
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.use(
  express.urlencoded({
    extended: true,
  }),
); //middleware

app.use(express.json()); //middleware

//Connect database

db.connect();

//Template Engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
); //Define handlebar

app.set('view engine', 'hbs'); //set view engine = hbs
app.set('views', path.join(__dirname, 'resources', 'views')); //allows to use views folder

//HTTP Logger
// app.use(morgan('combined'))

// Routes init
route(app);

app.listen(port, () => {
  // items
  console.log(`App listening at http://localhost:${port}`);
});
