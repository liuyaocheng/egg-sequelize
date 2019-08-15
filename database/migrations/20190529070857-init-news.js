'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('news', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(30),
      content:STRING(255),
      uid: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('news');
  }
};
