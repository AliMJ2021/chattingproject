module.exports = (sequelize, DataTypes) => {
    const Rom = sequelize.define("Rom", {
      name: {
        type: DataTypes.STRING,
      },
  
      owner: {
        type: DataTypes.STRING,
      },
  
      users: {
        type: DataTypes.STRING,
      },
    });
  
    return Rom;
  };
  