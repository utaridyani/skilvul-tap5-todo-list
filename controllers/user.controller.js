const User = require("../models/user");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

module.exports = {
  //get all user
  getAllUser: async (req, res, next) => {
    try {
      //menampilkan seluruh data kecuali password
      const users = await User.find({}, "-_id -__v -password")

      res.status(200).json({
        message: "Success",
        data: users
      });
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

  //get user by id
  getUserByID: async (req, res) => {
    const id = req.params.id
    try{
      const user = await User.findById((id), "-_id -__v -password")
      res.status(200).json({
        message: "Sucess",
        data: user
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

  //add user
  addUser: (req, res) => {
    //mengambil data dari req
    const data = req.body

    //hashing dan enksripsi password
    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds)
    data.password = hash

    const user = new User(data)
    user.save()

    res.json({
      message: "data has been created"
    })
  },

  //delete user by id
  deleteUserByID: async(req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).send(`User ${id} not found`)
    }

    await User.findByIdAndRemove(id)
    res.status(200).json({
      message: "data has successfully deleted"
    })
  },

  //update user by id
  updateUserByID: async (req, res) => {
    const id = req.params.id;
    const {nama, email, password} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).send(`User ${id} not found`)
    }

    const user = {nama, email, password}

    await User.findByIdAndUpdate(id, user, {new: true});
    const new_user = await User.findById((id), "-_id -__v -password")
    res.status(200).json({
      message: "sucess",
      data: new_user
    })

  }
  
}