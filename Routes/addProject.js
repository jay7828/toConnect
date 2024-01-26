const express = require('express');
const router = express.Router();
const Project = require('../model/projectSchema');

// Get all projects
router.get('/fetch', (req, res) => {
  Project.find()
    .then((projects) => {
      res.json({ success: true, data: projects });
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({ success: false, errmsg: 'Failed to get project data' });
    });
});

// Add a new project
router.post('/add', async (req, res) => {
  try {
    await Project.create({
      email: req.body.email,
      projectID: req.body.projectID,
      projectTitle: req.body.projectTitle,
      projectDesc: req.body.projectDesc,
      techStack: req.body.techStack,
      contactInfo: req.body.contactInfo,
      needCollaboration: req.body.needCollaboration,
      skillsRequired: req.body.skillsRequired,
    });
    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.json({ success: false,message:"Project Nahi bana" });
  }
});

// Update a project
router.put('/update/:projectID', async (req, res) => {
  const { projectID } = req.params;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      projectID,
      {
        email: req.body.email,
        projectID: req.body.projectID,
        projectTitle: req.body.projectTitle,
        projectDesc: req.body.projectDesc,
        techStack: req.body.techStack,
        contactInfo: req.body.contactInfo,
        needCollaboration: req.body.needCollaboration,
        skillsRequired: req.body.skillsRequired,
      },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.json({ success: true, updatedProject });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Delete a project
router.delete('/delete/:projectID', async (req, res) => {
  const { projectID } = req.params;

  try {
    const deletedProject = await Project.findByIdAndDelete(projectID);

    if (!deletedProject) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.json({ success: true, deletedProject });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
