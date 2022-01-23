const bcrypt = require('bcryptjs');
  
const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}
  
module.exports = {
    encryptPassword,
    comparePassword
}