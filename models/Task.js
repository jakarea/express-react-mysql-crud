'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      required: true,
      trim: true
    },
    description: {
      type: DataTypes.STRING,
      required: true,
      trim: true
    },
    type: {
      type: DataTypes.STRING,
      required: true,
      trim: true
    },
    status: {
      type: DataTypes.STRING,
      required: true,
      trim: true
    },
    due_date: {
      type: DataTypes.STRING,
      required: true,
      trim: true
    }
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};