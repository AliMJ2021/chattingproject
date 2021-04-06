const express = require("express");
const router = express.Router();


const {
  USRCreate,
  USRList,
  USRUpdate,
  USRDelete,
} = require("../controllers/USRcontroller");

// List
router.get("/", USRList);

// Create
router.post("/", USRCreate);

// Update
router.put("/:USRId", USRUpdate);

// delete
router.delete("/:USRId", USRDelete);



module.exports = router;
