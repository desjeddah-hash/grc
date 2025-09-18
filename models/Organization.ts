import { Schema, model, models } from "mongoose";

const OrganizationSchema = new Schema({
  name: { type: String, required: true },
  planId: { type: Schema.Types.ObjectId, ref: "Plan" },
  profile: Object
}, { timestamps: true });

export default models.Organization || model("Organization", OrganizationSchema);
