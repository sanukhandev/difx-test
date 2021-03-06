'use strict';

const { encryptPassword } = require("../utils/encrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: "Sanu",
      lastName: "Khan",
      email: "sanu@test.com",
      password: encryptPassword('testPassword'),
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
