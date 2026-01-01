import express from "express";
import Task from "../models/Task.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

router.get("/:projectId", auth, async (req, res) => {
  const tasks = await Task.find({ projectId: req.params.projectId });
  res.json(tasks);
});

router.put("/:id", auth, async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json("Updated");
});

export default router;
