const studentController = require("../controller/studentController")
const express = require("express");
const router = express.Router();
// Read Operation
router.get("/", studentController.getStudents)
// Read operation with id
router.get("/:rollNo", studentController.getStudentById)

//push ---> add data at the end of the data
//Create operation
router.post("/", studentController.addStudent)

// Update
router.put("/:rollNo", studentController.updateStudent)

// Delete
router.delete("/:rollNo",studentController.deleteStudent)

module.exports = router
