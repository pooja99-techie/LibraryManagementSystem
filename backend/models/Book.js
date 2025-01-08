import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  availableCopies: { type: Number, required: true, default: 1 },
});

export default model("Book", bookSchema);
