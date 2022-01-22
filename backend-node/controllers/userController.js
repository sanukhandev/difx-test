const {User} = require('../models');
const {mapData} = require('../utils/responseMapper');


const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    return mapData(users, res);
}


module.exports = {
    getAllUsers
}