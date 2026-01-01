import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  userId: String
});

export default mongoose.model("Project", projectSchema);
