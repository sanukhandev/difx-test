const { mapError } = require("../utils/responseMapper");
const { verifyAccessToken } = require("../utils/tokenizer");

const authGurd = (req, res, next) => {
    const token = req.headers["Authorization"].split(" ")[1];
    if (!token) {
        mapError('Un-Authorized Request, Please sign in to continue', res);
    }
    const decoded = verifyAccessToken(token);
    if (!decoded) {
        mapError('Unknown User, Please sign in to continue', res);
    }
    req.user = decoded;
    next();
}


module.exports = {
    authGurd
};