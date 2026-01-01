import express from "express";
import Project from "../models/Project.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    userId: req.user.id
  });
  res.json(project);
});

router.get("/", auth, async (req, res) => {
  const projects = await Project.find({ userId: req.user.id });
  res.json(projects);
});

export default router;
