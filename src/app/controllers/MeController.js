const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../util/moongose');
class MeController {
  //[GET] /me/store/mycourses

  storecourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('me/store-courses', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
