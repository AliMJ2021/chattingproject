module.exports = (sequelize, DataTypes) => {
    const Msg = sequelize.define("Msg", {
      meassages: {
        type: DataTypes.STRING,
      },
  
      userName: {
        type: DataTypes.STRING,
      },
  
      likes: {
        type: DataTypes.INTEGER,
      },
  
     dislikes : {
        type: DataTypes.INTEGER,
      },
    });
  
    return Msg;
  };
  