import { Schema, model, models } from "mongoose";
const IndustrySchema = new Schema({ name: { type: String, required: true } }, { timestamps: true });
export default models.Industry || model("Industry", IndustrySchema);
