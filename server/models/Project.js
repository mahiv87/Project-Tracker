const { Schema } = require('mongoose');

const projectSchema = new Schema({
	projectId: {
		type: Number,
		required: true
	},
	projectName: {
		type: String,
		required: true
	},
	projectType: {
		type: String
	},
	due: {
		type: String,
		required: true
	},
	rate: {
		type: Number,
		required: true
	}
});

module.exports = projectSchema;
