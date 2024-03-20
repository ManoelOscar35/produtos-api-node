const router = require("express").Router();

const DepartmentController = require("../controllers/DepartmentController");

router.post("/add/department", DepartmentController.addDepartment);
router.get("/get/departments", DepartmentController.getDepartments);
// router.put("/update/department", DepartmentController.updateDepartment);
// router.delete("/delete/department", DepartmentController.deleteDepartment);

module.exports = router;