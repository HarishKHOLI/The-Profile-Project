import {Profile} from "../models/Profile.js";
import mongoose from "mongoose";

export const getProfile = async (req, res) => {
  try {
    const userName = req.user?.name || "admin"; // Default to admin, if no user info
    console.log("Fetching profile for user:", userName);
    console.log("Mongoose readyState:", mongoose.connection.readyState);

    const profile = await Profile.findOne({name : userName});
    
    if (!profile) {
      return res.json({
        data: [],
        message: "No profile data available"
      });
    }
    
    res.json({
      data: profile,
      message: "Profile retrieved successfully"
    });
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    res.status(500).json({
      data: [],
      message: "Failed to fetch profile",
      error: error.message
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updated = await Profile.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    ).maxTimeMS(10000);
    
    res.json({
      data: updated,
      message: "Profile updated successfully"
    });
  } catch (error) {
    console.error("Error updating profile:", error.message);
    res.status(500).json({
      data: null,
      message: "Failed to update profile",
      error: error.message
    });
  }
};

export const endorseSkill = async (req, res) => {
  try {
    const profile = await Profile.findOne().maxTimeMS(10000);
    
    if (!profile) {
      return res.status(404).json({
        data: null,
        message: "Profile not found"
      });
    }
    
    const skill = profile.skills.id(req.params.skillId);
    if (!skill) {
      return res.status(404).json({
        data: null,
        message: "Skill not found"
      });
    }
    
    skill.endorsements += 1;
    await profile.save();
    
    res.json({
      data: profile,
      message: "Skill endorsed successfully"
    });
  } catch (error) {
    console.error("Error endorsing skill:", error.message);
    res.status(500).json({
      data: null,
      message: "Failed to endorse skill",
      error: error.message
    });
  }
};
