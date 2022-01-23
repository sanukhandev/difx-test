const express = require('express');
let router = express.Router();
const { getAllUsers } = require('../controllers/userController');
const { authGurd } = require('../middlewares/authMiddleware');

/* GET users listing. */
router.get('/',authGurd, getAllUsers);

module.exports = router;
  