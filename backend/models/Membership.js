import { Schema, model } from "mongoose";

const membershipSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  type: { type: String, enum: ["6 months", "1 year", "2 years"], required: true },
});

export default model("Membership", membershipSchema);
