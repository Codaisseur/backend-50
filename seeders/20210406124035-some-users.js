"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@codaisseur.com",
          age: 31,
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mary Doe",
          email: "mary@codaisseur.com",
          age: 31,
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Johnny Doe",
          email: "john2@codaisseur.com",
          age: 31,
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
