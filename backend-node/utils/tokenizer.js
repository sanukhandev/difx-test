require('dotenv').config();
const jwt = require('jsonwebtoken');
const {TOKEN_KEY} = process.env;

const generateAccessToken = (user) => {
    return jwt.sign(user, TOKEN_KEY, { expiresIn: '1h' });
  }

const verifyAccessToken = (token) => {
    return jwt.verify(token, TOKEN_KEY, (err, decoded) => err ? false : decoded);
}

module.exports = {
    generateAccessToken,
    verifyAccessToken
}