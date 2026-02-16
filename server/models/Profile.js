
import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: String,
  endorsements: { type: Number, default: 0 }
});

const profileSchema = new mongoose.Schema({
  name: String,
  bio: String,
  profilePicture: String,
  socialLinks: {
    linkedin: String,
    github: String,
    twitter: String
  },
  skills: [skillSchema],
  darkMode: { type: Boolean, default: false }
});

const Profile = mongoose.model("Profile", profileSchema);

export {Profile};
