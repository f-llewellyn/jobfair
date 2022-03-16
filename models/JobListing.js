// Import relevant parts of mongoose
const { Schema, model } = require("mongoose");

// Init new schema
const JobListingSchema = new Schema(
	{
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
			required: true,
		},
		applicationUrl: {
			type: String,
			required: true,
		},
	},
	{ collection: "joblistings" }
);

// Save the schema as a model
const JobListing = model("jobListing", JobListingSchema);

// Export the model
module.exports = JobListing;
