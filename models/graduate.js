const mongoose = require('mongoose')

const graduateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gradYearMonth: {
        type: Number
    },
    jobTitle: {
        type: String
    },
    companyName: {
        type: String
    },
    keySkills: {
        type: [String]
    },
    gitHub: {
        type: String
    },
    linkedIn: {
        type: String
    },
    twitter: {
        type: String
    },
    image: {
        data: Buffer, type: String
    }
})

module.exports = mongoose.model('Graduate', graduateSchema)