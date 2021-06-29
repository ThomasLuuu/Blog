const express = require('express');
const router = express.Router();

const coursescontroller = require('../app/controllers/CoursesController');

router.get('/create', coursescontroller.create);
router.get('/:slug', coursescontroller.show);
router.post('/store', coursescontroller.store);

module.exports = router;
