const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Correct paths (inside src folder)
const connectDB = require("./src/config/db");
const errorHandler = require("./src/middleware/errorHandler");

const employeeRoutes = require("./src/routes/employee.routes");
const taskRoutes = require("./src/routes/task.routes");
const userRoutes = require("./src/routes/user.routes");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// Error Handler
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
