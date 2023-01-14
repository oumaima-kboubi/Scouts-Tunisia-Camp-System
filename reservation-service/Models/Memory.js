const mongoose =require('mongoose');

memorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desciption : {
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