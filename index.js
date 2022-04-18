const express = require("express");
const cors = require("cors");

//configuraciones
// require('./db')
const app = express();
const ageGate = require("./routes/ageGate");
const form = require("./routes/form");

// Enable CORS
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
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

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };
