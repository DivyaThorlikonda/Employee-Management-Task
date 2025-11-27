const Task = require("../models/task.model");

// ➤ Create Task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ➤ Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignedTo");
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ➤ Get task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("assignedTo");
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ➤ Update task
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ➤ Delete task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
