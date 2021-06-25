class SiteController {
    // [GET] /news
    index(req, res) {
        res.render('home');
    }

    //[GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

// tạo ra một đối tượng(instance) newcontroller xong xuất ra ngoài, để có thể import ở file khác
