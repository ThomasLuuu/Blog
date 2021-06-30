const express = require('express');
const router = express.Router();

const mecontroller = require('../app/controllers/MeController');

router.get('/store/mycourses', mecontroller.storecourses);
// router.get('/store/myposts', mecontroller.show);
// router.post('/store', mecontroller.store);
router.get('/trash/courses', mecontroller.trashcourses);

module.exports = router;
