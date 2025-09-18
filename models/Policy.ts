import { Schema, model, models } from "mongoose";
const PolicySchema = new Schema({ name: String, body: String }, { timestamps: true });
export default models.Policy || model("Policy", PolicySchema);
