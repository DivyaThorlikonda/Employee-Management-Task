const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee", // links task to employee
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  completedAt: {
    type: Date,
  }
  
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);