// checkUserProfile.js
const User = require("../model/userSchema");

const checkUserProfile = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (
        user.branch == "xx" ||
        user.year_of_passing == 0 ||
        user.contact_no == 0 ||
        user.skill == "xxxx" 
      ) {
        req.isProfileComplete = true; // User found but missing required profile fields
      } else {
        req.isProfileComplete = true; // User found and profile is complete
      }
    }
    else{
        req.isProfileComplete=false;
    }
    next();
  } catch (error) {
    console.error("Error in checkUserProfile middleware:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { checkUserProfile };
