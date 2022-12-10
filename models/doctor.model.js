const mongoose = require('mongoose')

exports.doctorSchema = new mongoose.Schema({
    doctorID: {
        type: String,
        required: true,
        unique: true
    },
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
        immutable: false,
        default: "DOCTOR"
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