const express = require("express");
const router = express.Router();
const Controller = require("../controllers/ControllerForm")

//agrega formulario minivacaciones
router.post("/minivacaciones", Controller.addForm);

module.exports = router;
