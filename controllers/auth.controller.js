const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    login: async (req, res) => {
      const data = req.body
      try {
        //ambil data email
        const user = await User.findOne({email: data.email})
    
        //decrypt password untuk cek password
        const checkPwd = bcrypt.compareSync(data.password, user.password);

        //pembuatan token
        const token = jwt.sign({
            email: user.email,
            password: user.password
        }, process.env.SECRET_KEY);
        
        if (checkPwd) {
          res.json({
            message:"anda berhasil login",
            token
          })
        } else {
          res.statusCode = 401;
          return res.json({
            message: "password atau email anda salah"
        })
        }
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

    registrasi: async (req, res) => {
      //mengambil data dari req
      const data = req.body

      //hashing dan enksripsi password
      const saltRounds = 10
      const hash = bcrypt.hashSync(data.password, saltRounds)
      data.password = hash

      const user = new User(data)
      user.save()

      res.json({
        message: "account has been created"
      })
    }

}