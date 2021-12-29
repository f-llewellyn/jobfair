const { Router } = require("express")
const JobListing = require("../../models/JobListing")

const router = Router()

router.get("/", async(req, res) => {
    try {
        const jobListings = await JobListing.find()
        if (!jobListings) throw new Error('No job listings')
        res.status(200).json(jobListings)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const newJobListing = new JobListing(req.body)
    try {
        const jobListing = await newJobListing.save()
        if (!jobListing) throw new Error('Something went wrong saving the jobListing')
        res.status(200).json(jobListing)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router