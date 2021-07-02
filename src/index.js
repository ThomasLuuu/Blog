const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const db = require('./config/db');
const route = require('./routes');
const methodOverride = require('method-override');
const sortMiddleware = require('./app/middlewares/SortMiddleware');

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.use(sortMiddleware);

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
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
          default: 'oi oi-elevator',
          asc: 'oi oi-sort-ascending',
          desc: 'oi oi-sort-descending',
        };

        const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sortType];

        return `<a href="?_sort&column=${field}&type=${type}">
         <span class="${icon}"></span> 
      </a> `;
      },
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
