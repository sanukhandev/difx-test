const bcrypt = require('bcryptjs');
  
const encrypt = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

const compare = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}
  
module.exports = {
    encrypt,
    compare
}