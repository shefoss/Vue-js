const saveTasks = require("../controllers/taskController");

const router = require("express").Router();

router.post("/", saveTasks);

module.exports = router;
