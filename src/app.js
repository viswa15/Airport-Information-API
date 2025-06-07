require("reflect-metadata");
const express = require("express");
const AppDataSource = require("./config/data-source");
const airportRoutes = require("./routes/airportRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/airport", airportRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected.");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during DB initialization:", err);
  });
