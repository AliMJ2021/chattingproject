const express = require("express");
const router = express.Router();

const {
  RoomCreate,
  RoomList,
  RoomUpdate,
  RoomDelete,
} = require("../controllers/Roomcontroller");

// Cookie List
router.get("/", RoomList);

// Cookie Create
router.post("/", RoomCreate);

// Cookie Update
router.put("/:RoomId", RoomUpdate);

//Cookie delete
router.delete("/:RoomId", RoomDelete);

module.exports = router;