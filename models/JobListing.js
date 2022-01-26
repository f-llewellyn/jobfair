const { Schema, model } = require('mongoose')

const JobListingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    hours: {
        type: Number,
        required: true,
    },
    pay: {
        type: Number,
        required: true,
    },
    company: {
        type: String,
        required: true
    },
    applicationUrl: {
        type: String,
        required: true
    }
})

const JobListing = model('jobListing', JobListingSchema)

module.exports = JobListing