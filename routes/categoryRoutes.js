const express = require('express');
const {
  createCategory,
  getCategories,
  updateCategory,
  deleteEmptyCategory,
} = require('../controllers/categoryController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/category', authenticateToken, createCategory);
router.get('/categories', authenticateToken, getCategories);
router.put('/category/:categoryId', authenticateToken, updateCategory);
router.delete('/category/:categoryId', authenticateToken, deleteEmptyCategory);

module.exports = router;
