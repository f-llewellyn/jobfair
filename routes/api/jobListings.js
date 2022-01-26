const { Router } = require("express")
const JobListing = require("../../models/JobListing")

const router = Router()

// Get all listings
router.get("/", async(req, res) => {
    try {
        const jobListings = await JobListing.find()
        if (!jobListings) throw new Error('No job listings')
        res.status(200).json(jobListings)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//  Get specific Listing
router.get("/:id", async (req, res) => {
    const { id } = req.params

    try {
        const jobListings = await JobListing.findById(id)
        res.status(200).json(jobListings)
    } catch (error) {
        res.status(500).json({ message: "Sorry, we could not find that listing" })
    }
})

// Post a Listing
router.post('/', async (req, res) => {
    const newJobListing = new JobListing(req.body)
    try {
        const jobListing = await newJobListing.save()
        if (!jobListing) throw new Error('Something went wrong saving the listing')
        res.status(200).json(jobListing)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router