const mongoose =require('mongoose');

memorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,   
    },
    liked :{
        type: Array,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
})

module.exports= mongoose.model('campCenter',memorySchema)