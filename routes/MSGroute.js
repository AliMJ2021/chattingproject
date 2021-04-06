const express = require("express");
const router = express.Router();

const {
  MSGCreate,
  MSGList,
  MSGUpdate,
  MSGDelete,
} = require("../controllers/MSGcontroller");

// Cookie List
router.get("/", MSGList);

// Cookie Create
router.post("/", MSGCreate);

// Cookie Update
router.put("/:MSGId", MSGUpdate);

//Cookie delete
router.delete("/:MSGId", MSGDelete);

module.exports = router;