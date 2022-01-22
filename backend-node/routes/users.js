let express = require('express');
let router = express.Router();
const {getAllUsers} = require('../controllers/userController');

/* GET users listing. */
router.get('/', getAllUsers);

module.exports = router;
