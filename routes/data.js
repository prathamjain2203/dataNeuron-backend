const express = require("express");
const DataController = require("../controllers/data.controller");

const router = express.Router();

const dataController = new DataController();
router.post("/data/add", dataController.addData);
router.put("/data/update", dataController.updateData);
router.get("/data/count", dataController.getCount);

module.exports = router;
