const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  old: {
    type: Number,
  },
});
module.exports = mongoose.model("student", studentSchema);
