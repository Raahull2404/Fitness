const mongoose = require('mongoose')

exports.medsSchema = new mongoose.Schema({
    medName: {
        type: String,
        required: true
    },
    batchName: {
        type: String,
        required: true
    },
    addedOn: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now()
        }
    },
    updatedOn: {
        type: Date,
        immutable: false,
        default: () => {
            return Date.now()
        }
    }
})