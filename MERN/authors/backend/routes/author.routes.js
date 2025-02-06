const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author.controller');

router.get('/', authorController.getAllAuthors);
router.post('/', authorController.createAuthor);
router.get('/:id', authorController.getAuthorById);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;
