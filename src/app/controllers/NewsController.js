class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news');
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send('NEW DETAILS');
  }
}

module.exports = new NewsController();

// tạo ra một đối tượng(instance) newcontroller xong xuất ra ngoài, để có thể import ở file khác
