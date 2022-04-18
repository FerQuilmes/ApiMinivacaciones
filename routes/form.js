const express = require("express");
const router = express.Router();

router.post("/minivacaciones", (req, res) => {
  console.log("Run form");
  const {
    //accept,  // true
    cedula, // "213434"
    city, // "asunción"
    date, // "20/10/2020"
    email, // "checchi363@gmail.com"
    factura, // FileList {0: File, length: 1}
    info, // true
    name, // "Fernando Checchi"
    respuesta, // "En una pileteada"
    telefono, // "+549264583"
  } = req.body;

  if (
    !cedula ||
    !city ||
    !date ||
    !email ||
    !factura ||
    !name ||
    !respuesta ||
    !telefono
  ) {
    console.log("Run ageGate Failed");
    res.status(400).send("Request invalido");
  }
  res.status(200).json({
    success: true,
    cedula,
    city,
    date,
    email,
    factura,
    info,
    name,
    respuesta,
    telefono,
  });
});

module.exports = router;
