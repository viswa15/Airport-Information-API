const {DataSource} = require("typeorm");
const Airport = require("../entities/Airport");
const City = require("../entities/City");
const Country = require("../entities/Country");
const path = require("path");

const AppDataSource = new DataSource({
    type : "sqlite",
    database :  path.join(__dirname, "../../airport.db"),
    synchronize : true,
    logging : false,
    entities : [Airport,City,Country]
});

module.exports = AppDataSource;