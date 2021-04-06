module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Usr_Rom", {
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    });
  };