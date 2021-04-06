const { Msg } = require("../db/models");

exports.MSGCreate = async (req, res) => {
  try {
    const newMSGinit = await Msg.create(req.body);
    attributes: {
      exclude: ["createdAt", "updatedAt"];
    }
    res.json(newMSGinit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.MSGList = async (req, res) => {
  try {
    const MSGs = await Msg.findAll();
    res.json(MSGs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.MSGUpdate = (req, res) => {
  const { MSGId } = req.params;
  const foundMSG = Msg.find((msg) => msg.id === +MSGId);
  if (foundMSG) {
    for (const key in req.body) foundMSG[key] = req.body[key];g
    res.status(204).end();
  } else {
    res.status(404).json({ message: "MSG not found" });
  }
};

// exports.MSGDelete = (req, res) => {
//   const { MSGId } = req.params;
//   const foundMSG = Msg.findbyPK((msg) => msg.id === +MSGId);
//   if (foundMSG) {
//      Msg = Msg.filter((msg) => msg.id !== +MSGId);
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "MSG not found" });
//   }
// };

exports.MSGDelete = async (req, res) => {
  const { MSGId } = req.params;
  try {
    const foundMSG = await Msg.findByPk(MSGId);
    if (foundMSG) {
      await foundMSG.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "MSG not found" });
    }
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};