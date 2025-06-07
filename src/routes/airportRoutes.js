const express = require("express");
const router = express.Router();
const { getAirportByIATACode } = require("../controllers/airportController");

router.get("/:iata_code", getAirportByIATACode);

module.exports = router;
