import Task from '../database/model/task.model';

export const saveTask  = async (req, res) => {
    const task = req.body;
    const newTask = new Task(task);
    await newTask.save();
    res.status(201).json({success: true, data: newTask});
}

export const getAllTasks = async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({success: true, data: tasks})
}

export const getById = async (req, res) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    if(!task) return res.status(404).json({success: false, message: "Task not found"}) ;
    res.status(200).json({success: true, data: task});
}

export const updateTask = async(req, res) => {
    const {id} = req.params;
    const updates = req.body;
    const task = await Task.findById(id);
    if(!task) return res.status(404).json({success: false, message: "Task not found"}) ;
    await Task.findByIdAndUpdate(id, updates);
    res.status(200).json({success: true, message: "Task updated successfully"})
}

export const deleteTaskById = async(req, res) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    if(!task) return res.status(404).json({success: false, message: "Task not found"});
    await Task.findByIdAndDelete(id);
    res.status(200).json({success: true, message:"Task deleted", data: task});
}
