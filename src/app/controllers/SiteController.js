const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../util/moongose');
class SiteController {
  // [GET] / render home
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  //[GET] /search render search site
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();

// tạo ra một đối tượng(instance) newcontroller xong xuất ra ngoài, để có thể import ở file khác
