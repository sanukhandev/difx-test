const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { preExistsUserMiddleware } = require('../middlewares/preExistsMiddileware');
let router = express.Router();


router.post('/sign-up',preExistsUserMiddleware, registerUser);
router.post('/login', loginUser);



module.exports = router;