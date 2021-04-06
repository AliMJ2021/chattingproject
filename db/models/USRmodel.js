module.exports = (sequelize, DataTypes) => {
  const Usr = sequelize.define("Usr", {
    userName: {
      type: DataTypes.STRING,
      unique: true,
    },

    firstName: {
      type: DataTypes.STRING,
    },

    lastName: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
    },
  });

  return Usr;
};
