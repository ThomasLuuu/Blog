const express = require('express');
const router = express.Router();

const coursescontroller = require('../app/controllers/CoursesController');

router.get('/create', coursescontroller.create);
router.get('/:slug', coursescontroller.show);
router.post('/store', coursescontroller.store);
router.post('/handle-form-actions', coursescontroller.handleFormActions);
router.post('/trash/form-handle-actions', coursescontroller.trashHandleActions);
router.put('/:id', coursescontroller.update);
router.get('/:id/edit', coursescontroller.edit);
router.delete('/:id', coursescontroller.delete);
router.patch('/:id/restore', coursescontroller.restore);
router.delete('/:id/force', coursescontroller.force);
module.exports = router;
