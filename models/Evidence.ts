import { Schema, model, models } from "mongoose";

const EvidenceSchema = new Schema({
  assignmentId: { type: Schema.Types.ObjectId, ref: "Assignment", required: true },
  filePath: String,
  notes: String,
  uploadedBy: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default models.Evidence || model("Evidence", EvidenceSchema);
