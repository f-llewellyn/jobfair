const { Router } = require("express");
const JobListing = require("../../models/JobListing");

const router = Router();

// Get all listings
router.get("/", async (req, res) => {
	try {
		// Find all joblistings
		const jobListings = await JobListing.find();
		if (!jobListings) throw new Error("No job listings");
		// Respond with status 200 (success)
		res.status(200).json(jobListings);
	} catch (error) {
		// Respond with status 500 (error)
		res.status(500).json({ message: error.message });
	}
});

// Post a Listing
router.post("/", async (req, res) => {
	// Creates new job based on req.body and the schema
	const newJobListing = new JobListing(req.body);
	try {
		// Attempts to upload the joblisting
		const jobListing = await newJobListing.save();
		if (!jobListing)
			throw new Error("Something went wrong saving the listing");
		// Respond with status 200 (success)
		res.status(200).json(jobListing);
	} catch (error) {
		// Respond with status 500 (error)
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
