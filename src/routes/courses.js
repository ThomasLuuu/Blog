const express = require('express');
const router = express.Router();

const coursescontroller = require('../app/controllers/CoursesController');

router.get('/create', coursescontroller.create);
router.get('/:slug', coursescontroller.show);
router.post('/store', coursescontroller.store);
router.put('/:id', coursescontroller.update);
router.get('/:id/edit', coursescontroller.edit);
module.exports = router;
