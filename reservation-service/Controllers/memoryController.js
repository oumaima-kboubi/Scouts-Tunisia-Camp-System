const Memory = require("../Models/Memory");
const {articleAddedCounter} = require('../metrics')
var winston = require('winston');
// var {Loggly} = require('winston-loggly-bulk');
const {logger} = require('../logger')

const childLogger = logger.child({ service: 'memory-service'});

const getMemories = (req, res) => {
  Memory.find((err, memory) => {
    if (err) {
      res.send(err);
    }
    res.json(memory);
    logger.info('Get All Memories' , { request_id: req.requestId});
  });
};
const getMemoriesById = (req, res) => {
  Memory.find(
    { author: req.params.username },
    (err, memory) => {
    if (err) {
      
      res.send(err);
    }
    logger.info('Memory by username: '+req.params.username , { request_id: req.requestId});
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
        articleAddedCounter.inc({'route': '/memories', 'status_code': 200,'requestType':'post'})
        res.send(err);
      }
      logger.info('Memory created' , { request_id: req.requestId});
      // logger.info('Memory Article Created!');
      // winston.log('info', "Memory Article Created!");
      articleAddedCounter.inc({'route': '/memories', 'status_code': 200,'requestType':'post'})
      // console.log(req.requestId);
      logger.info('Creating a memory', { request_id: req.requestId});
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
        } else
        {
          logger.info('Memory Edited' , { request_id: req.requestId});
        res.json(Memory);
        }
      }
    );
  };
  
  const deleteMemory = (req, res) => {
    Memory.deleteOne({ _id: req.params.memoryID })
      .then(() => 
      {
        logger.info('Memory Deleted' , { request_id: req.requestId});
        res.json({ message: "Memory Deleted" })
      }).catch((err) =>{ 
        res.send(err)
        logger.info('Memory ERROR Deleted' , { request_id: req.requestId});
      });
  };
  

module.exports = {
   getMemories, createMemory, updateMemory, deleteMemory, getMemoriesById
};
  