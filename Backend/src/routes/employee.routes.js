const express = require("express");
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../Controllers/employee.controller");

const router = express.Router();

router.post("/", createEmployee);        // Create employee
router.get("/", getEmployees);           // Get all
router.get("/:id", getEmployeeById);     // Get one
router.put("/:id", updateEmployee);      // Update
router.delete("/:id", deleteEmployee);   // Delete

module.exports = router;
