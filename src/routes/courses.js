const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: './src/public/uploads/' });

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', upload.single('avatar'), courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions);
router.post(
    '/handle-form-trash-actions',
    courseController.handleFormTrashActions,
);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.get('/:slug', courseController.show);

module.exports = router;
