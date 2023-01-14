const Memory = require("../Models/Memory");

const getMemories = (req, res) => {
  Memory.find((err, memory) => {
    if (err) {
      res.send(err);
    }
    res.json(memory);
  });
};

  
const createMemory = (req, res) => {
    const memory = new Memory({
      title: req.body.title,
      description: req.body.description,
    });
  
    memory.save((err, memory) => {
      if (err) {
        res.send(err);
      }
      res.json(memory);
    });
  };
  

  const updateMemory = (req, res) => {
    Memory.findOneAndUpdate(
      { _id: req.params.memoryID },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      },
      { new: true },
      (err, Memory) => {
        if (err) {
          res.send(err);
        } else res.json(Memory);
      }
    );
  };
  
  const deleteMemory = (req, res) => {
    Memory.deleteOne({ _id: req.params.memoryID })
      .then(() => res.json({ message: "Memory Deleted" }))
      .catch((err) => res.send(err));
  };
  

module.exports = {
   getMemories, createMemory, updateMemory, deleteMemory
};
  