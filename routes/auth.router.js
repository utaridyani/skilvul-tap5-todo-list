const express = require("express");
const router = express.Router();

const {
    login,
    registrasi
} = require("../controllers/auth.controller");

router.post("/login", login);
router.post("/registrasi", registrasi);

module.exports = router;