
import Profile from "../models/Profile.js";

export const getProfile = async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
};

export const updateProfile = async (req, res) => {
  const updated = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
};

export const endorseSkill = async (req, res) => {
  const profile = await Profile.findOne();
  const skill = profile.skills.id(req.params.skillId);
  if (!skill) return res.status(404).json({ message: "Skill not found" });
  skill.endorsements += 1;
  await profile.save();
  res.json(profile);
};
