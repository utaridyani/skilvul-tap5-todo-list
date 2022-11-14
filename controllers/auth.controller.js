const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    login: async (req, res) => {
        const data = req.body
    
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
            message: "kamu siapa yank?"
        })
        }
    },

    registrasi: (req, res) => {}

}