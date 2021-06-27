const Course = require('../models/Course.js');

class SiteController {
  // [GET] /news
  index(req, res) {
    Course.find({}, function (err, courses) {
      if (!err) {
        res.json(courses);
        return;
      }
      res.status(400).json({ error: 'ERROR!!!' });
    });
  }

  //[GET] /news/:slug
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();

// tạo ra một đối tượng(instance) newcontroller xong xuất ra ngoài, để có thể import ở file khác
