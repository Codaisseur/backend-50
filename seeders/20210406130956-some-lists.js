"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          title: "Personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sports",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
