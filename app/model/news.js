'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const News = app.model.define('news', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(30),
      content:STRING(255),
      uid: INTEGER,
      created_at: DATE,
      updated_at: DATE,
  });

  return News;
};
