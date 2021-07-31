const router = require("express").Router();
const studentModel = require("../models/student.model");

router.get("/", async (req, res) => {
  try {
    const students = await studentModel.find();
    res.render("funtion/listStudent", { students });
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

//* điều hướng đến trang thêm sinh viên
router.get("/add", (req, res) => {
  res.render("funtion/addStudent");
});

//* thêm sinh viên
router.post("/add", async (req, res) => {
  try {
    const newStudent = new studentModel({
      name: req.body.name,
      email: req.body.email,
      old: req.body.old,
    });
    await newStudent.save();
    res.redirect("/student");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await studentModel.findByIdAndDelete(req.params.id);
    res.redirect("/student");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});
router.put("/edit/:id", async (req, res) => {
  try {
    let student = await studentModel.findById(req.params.id);
    student.name = req.body.name;
    student.old = req.body.old;
    student.email = req.body.email;
    await student.save();
    res.redirect("/student");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

module.exports = router;
