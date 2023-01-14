const Memory = require("../Models/Memory");

const getMemories = (req, res) => {
  Memory.find((err, memory) => {
    if (err) {
      res.send(err);
    }
    res.json(memory);
  });
};
const getMemoriesById = (req, res) => {
  Memory.find(
    { author: req.params.username },
    (err, memory) => {
    if (err) {
      res.send(err);
    }
    res.json(memory);
  });
};

  
const createMemory = (req, res) => {
    const memory = new Memory({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
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
          content: req.body.content,
          author: req.body.author,
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
   getMemories, createMemory, updateMemory, deleteMemory, getMemoriesById
};
  