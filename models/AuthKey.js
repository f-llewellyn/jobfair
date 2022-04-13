// Import relevant parts of mongoose
const { Schema, model } = require("mongoose");

// Init new schema
const AuthKeySchema = new Schema(
	{
		key: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
	},
	{ collection: "authkeys" }
);

// Save the schema as a model
const AuthKey = model("authKey", AuthKeySchema);

// Export the model
module.exports = AuthKey;
