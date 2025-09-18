import { Schema, model, models } from "mongoose";

const AssessmentSchema = new Schema({
  orgId: { type: Schema.Types.ObjectId, ref: "Organization", required: true },
  frameworkId: { type: Schema.Types.ObjectId, ref: "Framework", required: true },
  title: { type: String, required: true },
  status: { type: String, enum: ["open","in_review","closed"], default: "open" }
}, { timestamps: true });

export default models.Assessment || model("Assessment", AssessmentSchema);
