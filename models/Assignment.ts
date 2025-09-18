import { Schema, model, models } from "mongoose";

const AssignmentSchema = new Schema({
  assessmentId: { type: Schema.Types.ObjectId, ref: "Assessment", required: true },
  controlKey: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum: ["pending","submitted","escalated","approved","rejected"], default: "pending" }
}, { timestamps: true });

export default models.Assignment || model("Assignment", AssignmentSchema);
