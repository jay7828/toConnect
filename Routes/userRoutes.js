const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");

// Get user
router.get("/profile/:id", (req, res) => {
  const userId = req.params.id;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .json({ success: false, errmsg: "User not found" });
      }

      res.json({ success: true, data: user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false, errmsg: "Internal Server Error" });
    });
});

//update profile
router.put("/profile/:id", async (req, res) => {
  const { userId } = req.params;

  try {
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "UserID parameter is missing" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      {
        name: req.body.name,
        contact_no: req.body.contact_no,
        year_of_passing: req.body.year_of_passing,
        branch: req.body.branch,
        skill: req.body.skill,
        about: req.body.about,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, updatedUser });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
