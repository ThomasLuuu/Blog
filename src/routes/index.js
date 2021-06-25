const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  app.use('/news', newsRouter);

  app.get('/', (req, res) => {
    res.render('home');
  });

  app.get('/search', (req, res) => {
    console.log(req.query); //track database through the req with query search?q= thomasblog

    res.render('search');
  });

  // Action --> Dispatcher --> Function handler == controller

  app.post('/search', (req, res) => {
    console.log(req.body); //only use in post, can't use in get method

    res.render('search');
  });
}

module.exports = route;
