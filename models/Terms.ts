import { Schema, model, models } from "mongoose";
const TermsSchema = new Schema({ version: String, body: String }, { timestamps: true });
export default models.Terms || model("Terms", TermsSchema);
