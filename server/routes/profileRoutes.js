
import express from "express";
import { getProfile, updateProfile, endorseSkill } from "../controller/profileController.js";

const router = express.Router();

router.get("/", getProfile);
router.put("/", updateProfile);
router.post("/endorse/:skillId", endorseSkill);

export default router;
