const { Router } = require("express");
const AuthKey = require("../../models/AuthKey");

const router = Router();

// Get all listings
router.get("/", async (req, res) => {
	try {
		// Find all authkeys
		const authKeys = await AuthKey.find();
		if (!authKeys) throw new Error("No auth keys");
		// Respond with status 200 (success)
		res.status(200).json(authKeys);
	} catch (error) {
		// Respond with status 500 (error)
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
