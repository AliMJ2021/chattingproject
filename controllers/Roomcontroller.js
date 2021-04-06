const { Rom } = require("../db/models");

exports.RoomCreate = async (req, res) => {
  try {
  
    const newRoom = await Rom.create(req.body);
    attributes: {
      exclude: ["createdAt", "updatedAt"];
    }
    res.json(newRoom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.RoomList = async (req, res) => {
  try {
    const Rooms = await Rom.findAll();
    res.json(Rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.RoomUpdate = (req, res) => {
  const { RoomId } = req.params;
  const foundRoom = Rom.find((room) => room.id === +RoomId);
  if (foundRoom) {
    for (const key in req.body) foundRoom[key] = req.body[key];g
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Room not found" });
  }
};

exports.RoomDelete = (req, res) => {
  const { RoomId } = req.params;
  const foundRoom = Rom.find((room) => room.id === +RoomId);
  if (foundRoom) {
     Rom = Rom.filter((room) => room.id !== +RoomId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Room not found" });
  }
};