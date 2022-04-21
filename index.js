const express = require("express");
const cors = require("cors");

//configuraciones
// require('./db')
const app = express();
const ageGate = require("./routes/ageGate");
const form = require("./routes/form");

//Setings PORT
app.set('port', process.env.PORT || 3001);

// Enable CORS
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://wapocazure2-dev.azurewebsites.net/"],
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, X-Auth-Token, X-PINGOTHER, Accept",
    methods: "GET,HEAD,PUT,PATCH,OPTIONS,POST,DELETE",
  })
);

// Enable JSON use
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

/**
 * Routes - Public
 */
app.use("/ageGate", ageGate);
app.use("/form", form);

const server = app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});

module.exports = { app, server };
