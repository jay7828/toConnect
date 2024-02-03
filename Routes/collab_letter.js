const express = require('express');
const router = express.Router();
const Collab_letter = require('../model/collabletter_Schema');

// Get all Collab's
router.post('/fetch', (req, res) => {
    const receiver = req.body.receiver;
  
    Collab_letter.find({ receiver: receiver })
      .then((collab_letterSchema) => {
        res.json({ success: true, data: collab_letterSchema });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({ success: false, errmsg: 'Failed to get Collab Letter data' });
      });
  });
  

// Add a new Collab Letter
router.post('/add', async (req, res) => {
  try {
    await Collab_letter.create({
        letterID:req.body.letterID,
        sender: req.body.sender,
        receiver: req.body.receiver,
        subject:req.body.subject, 
        body :req.body.body,
        date:req.body.date,
    });
    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.json({ success: false,message:"Collab Letter Not Added" });
  }
});

// Delete a project
router.delete('/delete/:letterID', async (req, res) => {
  const { letterID } = req.params;

  try {
    const deletedLetter = await Collab_letter.findOneAndDelete(letterID);

    if (!deletedLetter) {
      return res.status(404).json({ success: false, message: 'Collab Letter not found' });
    }

    res.json({ success: true, deletedLetter });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
