const newsRouter = require('./news');
const courseRouter = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
  app.use('/me', meRouter);
  app.use('/news', newsRouter);
  app.use('/courses', courseRouter);
  app.use('/', siteRouter);

  // app.get('/search', (req, res) => {
  //   console.log(req.query); //track database through the req with query search?q= thomasblog

  //   res.render('search');
  // });

  // Action --> Dispatcher --> Function handler == controller

  // app.post('/search', (req, res) => {
  //   console.log(req.body); //only use in post, can't use in get method

  //   res.render('search');
  // });
}

module.exports = route;
