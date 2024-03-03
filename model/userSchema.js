const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  username: { type: String, required: true,unique:true  },
  name: { type: String, required: true },
  email: { type: String, required: true,unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  contact_no: { type: Number ,default:"0000000000" },
  year_of_passing: { type:Number ,default:"0000" },
  branch: { type: String ,default:"xx" },
  skill: [{ type: String,default:"xxxx"  }],
  about: { type: String,default:"xxxx"  },
});

module.exports = mongoose.model("user", userSchema);
