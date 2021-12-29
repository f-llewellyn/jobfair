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
        type: String,
        required: true,
    },
    pay: {
        type: String,
        required: true,
    }
})

const JobListing = model('jobListing', JobListingSchema)

module.exports = JobListing