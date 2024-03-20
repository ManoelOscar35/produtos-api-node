const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const DepartmentRoutes = require("./routes/DepartmentRoutes");

app.use(DepartmentRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Servidor ON!");
});

require("./database/connection");