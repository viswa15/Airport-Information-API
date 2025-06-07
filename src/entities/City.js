const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "City",
  tableName: "cities",
  columns: {
    id: { type: Number, primary: true },
    name: { type: String },
    lat: { type: "float" },
    long: { type: "float" },
    is_active: { type: Boolean },
  },
  relations: {
    country: {
      type: "many-to-one",
      target: "Country",
      joinColumn: { name: "country_id" },
      eager: true,
    },
    airports: {
      type: "one-to-many",
      target: "Airport",
      inverseSide: "city",
    },
  },
});
