const Todo = require("../models/todo");
const mongoose = require('mongoose');

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      const todos = await Todo.find();

      res.status(200).json({
        message: "success",
        data: todos
      })
    } catch(error) {
      if (error.name == "NotFoundError") {
        res.status(404).json({
          message: "Not Found Error"
        });
      }
      else if(error.name == "ValidationError") {
        res.status(400).json({
          message: "Validation Error"
        });        
      }
      else {
        res.status(500).json({
          message: "Server Error"
        });
      }     
    }
  },

  getTodoByID: async (req, res) => {
    const id = req.params.id
    try {
      const todo = await Todo.findById(id)

      res.status(200).json({
        message: "success",
        data: todo
      })
    } catch(error) {
      if (error.name == "NotFoundError") {
        res.status(404).json({
          message: "Not Found Error"
        });
      }
      else if(error.name == "ValidationError") {
        res.status(400).json({
          message: "Validation Error"
        });        
      }
      else {
        res.status(500).json({
          message: "Server Error"
        });
      }
    }
  },

  getAllTodoByUserID: async (req, res) => {
    const user = req.params.id
    try {
      const todos = await Todo.find({"user": user}, (err, result) => {
        if(result.length === 0) {
          res.status(200).json({
            message: "User doesn't have a todo list yet"
          })
        } else {
          res.status(200).json({
            message: "success",
            data: result
          })
        }
      }).clone()
    }
     catch(err) {
      res.status(404).json({
        message: err.message
      })
    }
},

  addTodo: (req, res) => {
    try {
    //mengambil data dari req
    const data = req.body

    const todo = new Todo(data)
    todo.save()

    res.json({
      message: "data has been created"
    })

    } catch(error) {
      if (error.name == "NotFoundError") {
        res.status(404).json({
          message: "Not Found Error"
        });
      }
      else if(error.name == "ValidationError") {
        res.status(400).json({
          message: "Validation Error"
        });        
      }
      else {
        res.status(500).json({
          message: "Server Error"
        });
      }     
    }
  },

  deleteTodoByID: async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`Todo dengan id : ${id} tidak ditemukan`)
    }

    await Todo.findByIdAndRemove(id)
    res.status(200).json({
      message: "success"
    })
 
  },

  updateTodoByID: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`Todo dengan id : ${id} tidak ditemukan`)
    }

    await Todo.findByIdAndUpdate(id, data, {new: true});
    res.status(200).json({
      message: "success",
      data
    })
  },

  deleteAllTodo: async (req, res) => {
    try {
      const todos = await Todo.deleteMany();

      res.status(200).json({
        message: "success",
        data: todos
      })
    } catch(error) {
      if (error.name == "NotFoundError") {
        res.status(404).json({
          message: "Not Found Error"
        });
      }
      else if(error.name == "ValidationError") {
        res.status(400).json({
          message: "Validation Error"
        });        
      }
      else {
        res.status(500).json({
          message: "Server Error"
        });
      }     
    }

  }
  
}