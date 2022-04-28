const { db } = require('../db');

exports.addForm = (req, res) => {
  console.log('Run form');
  let infoBoolean = 0;
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

  if (!cedula || !city || !date || !email || !factura || !name || !respuesta || !telefono) {
    console.log('Run ageGate Failed');
    res.status(400).send('Request invalido');
  }

  if (info === true) infoBoolean = 1;
//`name`, `cedula`, `city`, `date`, `email`, `form_response`, `tel`, `info`
  db.query(
    'INSERT INTO py_skol_minivacaciones SET?',
    {
      name,
      cedula,
      city,
      date,
      email,
      form_response: respuesta,
      info: infoBoolean,
      telefono,
    },
    (err, resultado) => {
      console.log(err);
      if (err) return res.status(400).send('Hubo un error al crear el Form');
      if (resultado)
        return res.status(200).json({
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
    }
  );
};
