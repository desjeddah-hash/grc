import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  name: String,
  passwordHash: String,
  role: { type: String, enum: ["admin","data_entry","owner","compliance_manager","assessor","control_owner","auditor"], required: true },
  orgId: { type: Schema.Types.ObjectId, ref: "Organization" }
}, { timestamps: true });

export default models.User || model("User", UserSchema);
