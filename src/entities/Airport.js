const {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
    name: "Airport",
  tableName: "airports",
  columns: {
    id: { type: Number, primary: true },
    icao_code: { type: String },
    iata_code: { type: String },
    name: { type: String },
    type: { type: String },
    latitude_deg: { type: "float" },
    longitude_deg: { type: "float" },
    elevation_ft: {
      type: "int",
      nullable: true, //  allow nulls
    },
  },
  relations: {
    city: {
      type: "many-to-one",
      target: "City",
      joinColumn: { name: "city_id" },
      eager: true,
    },
  },
})