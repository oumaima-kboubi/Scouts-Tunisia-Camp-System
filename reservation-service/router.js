const router = require("express").Router();
const { getMemories , createMemory, updateMemory, deleteMemory, getMemoriesById } = require("./Controllers/memoryController");


router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/memories", getMemories);

router.post("/memories", createMemory);

router.put("/memories/:memoryID", updateMemory);

router.delete("/memories/:memoryID", deleteMemory);

router.get("/memoriesById/:username", getMemoriesById);
module.exports = router;