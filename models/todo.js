const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    judul: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    },
    user: {
        type: mongoose.ObjectId,
        ref: "User"
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo