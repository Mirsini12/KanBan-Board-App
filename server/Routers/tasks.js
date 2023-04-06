const express = require("express");
const router = express.Router();
const Task = require("../Models/tasksModels");

// get all tasks and tasks  with the requested status(http://localhost:8000/tasks?status=status)
router.get("/", async (req, res) => {
  try {
    const status = req.query.status;
    let statusTasks;
    if (status) {
       statusTasks = await Task.find({ status });
    }else{
      statusTasks=await Task.find();
    }
    res.send(statusTasks).status(200);
  } catch (error) {
    res.send({ msg: error });
  }
});


router.post("/", async (req, res) => {
  try {
    let newTask = await Task.create(req.body);
    res.send({ msg: "A new task created ", newTask });
  } catch (error) {
    res.send({ msg: error })
  }
})

router.put("/:id", async (req, res) => {
  try {
    let updatedTask = await Task.updateOne({ _id: req.params.id }, req.body);
    res.send({ msg: "Task updated ", updatedTask });
  } catch (error) {
    res.send({ msg: error })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    let deletedTask = await Task.deleteOne({ _id: req.params.id });
    res.send({ msg: "Task deleted ", deletedTask });
  } catch (error) {
    res.send({ msg: error })
  }
})

module.exports = router;