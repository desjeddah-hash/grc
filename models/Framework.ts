import { Schema, model, models } from "mongoose";

const ControlSchema = new Schema({
  key: String,
  title: String,
  description: String
}, { _id: false });

const FrameworkSchema = new Schema({
  name: { type: String, required: true },
  version: String,
  controls: [ControlSchema]
}, { timestamps: true });

export default models.Framework || model("Framework", FrameworkSchema);
