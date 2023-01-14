const mongoose =require('mongoose');

memorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content : {
        type: String,
        required: true,   
    },
    author : {
        type: String,
    },
    liked :{
        type: Array,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
})

module.exports= mongoose.model('memories',memorySchema)