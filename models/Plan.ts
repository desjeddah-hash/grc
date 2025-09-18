import { Schema, model, models } from "mongoose";

const PlanSchema = new Schema({
  name: { type: String, required: true },
  limits: Object,
  price: Number
}, { timestamps: true });

export default models.Plan || model("Plan", PlanSchema);
