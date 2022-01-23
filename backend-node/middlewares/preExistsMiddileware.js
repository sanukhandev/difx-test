const {User} = require('../models');
const { mapError } = require("../utils/responseMapper");


const preExistsUserMiddleware = async (req, res, next) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({
            where: {
                email,
            }
        });
        if (!user) {
            next();
        } else {
            mapError('Email Already exits', res);
        }
    } catch (error) {
        mapError(error, res);
    }
}

module.exports={
        preExistsUserMiddleware
}