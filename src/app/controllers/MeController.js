const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../util/moongose');
class MeController {
  //[GET] /me/store/mycourses

  storeCourses(req, res, next) {
    let courseQuery = Course.find({});

    if (req.query.hasOwnProperty('_sort')) {
      courseQuery = courseQuery.sort({
        [req.query.column]: [req.query.type],
      });
    }

    Promise.all([courseQuery, Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) =>
        res.render('me/store-courses', {
          deletedCount: deletedCount,
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }

  trashCourses(req, res, next) {
    let courseTrashQuery = Course.findDeleted({});

    if (req.query.hasOwnProperty('_sort')) {
      courseTrashQuery.sort({
        [req.query.column]: [req.query.type],
      });
    }

    courseTrashQuery
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
