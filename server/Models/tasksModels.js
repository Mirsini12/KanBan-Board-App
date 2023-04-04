const mongoose = require("mongoose");

// Create task Schema
const taskSchema = mongoose.Schema(
    {
        task:{type:String,required:true},
        description:"String",
        status:{type: String,
               enum: ['new', 'ready', 'in_progress','done'],
               default: 'new',
               required:true}
    },
      {versionKey:false}
);

// Model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;