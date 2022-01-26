const {User} = require('../models');
const { comparePassword, encryptPassword } = require('../utils/encrypt');
const {mapData, mapError} = require('../utils/responseMapper');
const { generateAccessToken } = require('../utils/tokenizer');

const registerUser = async (req, res) => {
    const {email, password, firstName, lastName } = req.body;
    try {
        const user = await User.create({
            email,
            password:encryptPassword(password),
            firstName,
            lastName
        });
        mapData(user, res);
    } catch (error) {
        mapError(error, res);
    }
}

const loginUser = async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    try {
        const user = await User.findOne({
            where: {
                email,
            },
            attributes: {
                exclude: [ 'createdAt', 'updatedAt']
            }
        });

        !user &&  mapError('User not found', res);
        !comparePassword(password, user.password) && mapError('Invalid Password', res);

        const {dataValues: sessionObj} = user;
        delete sessionObj.password
        const token = generateAccessToken(sessionObj);
        mapData({token, user:sessionObj}, res);
    } catch (error) {   
        mapError(error, res);
    }
}


module.exports = {
    registerUser,
    loginUser
}
