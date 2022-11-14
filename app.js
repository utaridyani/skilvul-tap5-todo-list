const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');

const allRoutes = require('./routes');

app.use(express.json());

//menentukan port, dia akan mengambil port dari env (jika sudah ada,
//ini biasanya ketika sudah di deploy maka server akan memakai
//nomor port sendiri), jika tidak ada maka akan memakai port 3000
const PORT = process.env.PORT || 3000

//test koneksi database
dotenv.config();
const uri = process.env.MONGO_URI;
const connect = mongoose.connect(uri);

connect.
then(() => {
  console.log("database_terkoneksi")
})
.catch((err) => {
  console.log(err)
})


app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})