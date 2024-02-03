const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  email: { type: String, required: true },
  projectID: { type: String, required: true ,unique: true },
  projectTitle: { type: String, required: true },
  projectDesc: { type: String, required: true },
  techStack: { type: [String], required: true }, 
  contactInfo: { type: String, required: true },
  needCollaboration: { type: Boolean, required: true },
  skillsRequired: { type: [String], required: true }, // Changed to array of strings
});

module.exports = mongoose.model('project', projectSchema);
