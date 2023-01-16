const router = require("express").Router();
const { getMemories , createMemory, updateMemory, deleteMemory, getMemoriesById } = require("./Controllers/memoryController");


router.get("/res", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/res/memories", getMemories);

router.post("/res/memories", createMemory);

router.put("/res/memories/:memoryID", updateMemory);

router.delete("/res/memories/:memoryID", deleteMemory);

router.get("/res/memoriesById/:username", getMemoriesById);
module.exports = router;