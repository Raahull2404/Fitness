const mongoose = require('mongoose')

exports.userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        default: ""
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        default: "PATIENT"
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now()
        }
    },
    updatedAt: {
        type: Date,
        immutable: false,
        default: () => {
            return Date.now()
        }
    }
})