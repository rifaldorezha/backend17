'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert("users", [
      {
        fullname: "Krisna",
        email: "kris@gmail.com",
        password: "123",
        tgl_lahir: "/19/11/2022",
        alamat: "madiun",
        image: "png",
        refresh_token: "Krisna",
        role: "Krisna",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete("users", null, {});
  }
};
