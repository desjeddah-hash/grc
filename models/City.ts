import { Schema, model, models } from "mongoose";
const CitySchema = new Schema({ name: { type: String, required: true } }, { timestamps: true });
export default models.City || model("City", CitySchema);
