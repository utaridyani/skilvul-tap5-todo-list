const mongoose = require('mongoose');
const { Schema } = mongoose;

//membuat schema
const userSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

//buat model
const User = mongoose.model("User", userSchema)

//export
module.exports = User