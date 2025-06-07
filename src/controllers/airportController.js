const AppDataSource = require("../config/data-source");

async function getAirportByIATACode(req, res) {
  try {
    const iataCode = req.params.iata_code.toUpperCase();
    const airportRepo = AppDataSource.getRepository("Airport");

    const airport = await airportRepo.findOne({
      where: { iata_code: iataCode },
      relations: {
        city: {
          country: true,
        },
      },
    });

    if (!airport) {
      return res.status(404).json({ error: "Airport not found" });
    }

    const { city } = airport;
    const { country } = city || {};

    res.json({
      airport: {
        id: airport.id,
        icao_code: airport.icao_code,
        iata_code: airport.iata_code,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitude_deg,
        longitude_deg: airport.longitude_deg,
        elevation_ft: airport.elevation_ft,
        address: {
          city: {
            id: city?.id,
            name: city?.name,
            country_id: city?.country?.id,
            is_active: city?.is_active,
            lat: city?.lat,
            long: city?.long,
          },
          country: country
            ? {
                id: country.id,
                name: country.name,
                country_code_two: country.country_code_two,
                country_code_three: country.country_code_three,
                mobile_code: country.mobile_code,
                continent_id: country.continent_id,
              }
            : null,
        },
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAirportByIATACode,
};
