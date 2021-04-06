"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Personal",
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Work",
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Sports",
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
