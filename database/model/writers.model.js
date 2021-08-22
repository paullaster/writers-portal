import mongoose from "mongoose";
import WritersSchema from "../schemas/writers.schema";
const Writer = mongoose.model("Writer", WritersSchema);
export default Writer;
