const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../util/moongose');
class MeController {
  //[GET] /me/store/mycourses

  storeCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) =>
        res.render('me/store-courses', {
          deletedCount: deletedCount,
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }

  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
