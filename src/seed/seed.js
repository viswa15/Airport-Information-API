const csv = require("csvtojson");
const AppDataSource = require("../config/data-source");
const Airport = require("../entities/Airport");
const City = require("../entities/City");
const Country = require("../entities/Country");
const path = require("path");

async function seed(){
    await AppDataSource.initialize();
    const airportRepo = AppDataSource.getRepository("Airport");
    const cityRepo = AppDataSource.getRepository("City");
    const countryRepo = AppDataSource.getRepository("Country");

    //load countries
    const countries = await csv().fromFile(path.join(__dirname,"../../data/countries.csv"));
    
    for (const c of countries){
        await countryRepo.save({
            id : Number(c.id),
            name : c.name,
            country_code_two : c.country_code_two,
            country_code_three : c.country_code_three,
            mobile_code : Number(c.mobile_code),
            continent_id : Number(c.continent_id),
        })
    }

    //Load cities
    const cities = await csv().fromFile(path.join(__dirname,"../../data/cities.csv"));
    for (const c of cities){
        const country = await countryRepo.findOneBy({ id : Number(c.country_id)});
        if(country){
            await cityRepo.save({
                id :Number(c.id),
                name : c.name,
                lat : parseFloat(c.lat),
                long : parseFloat(c.long),
                is_active : c.is_active.toLowerCase() === "true",
                country,
            })
        }
    }

    //load airports
    const airports = await csv().fromFile(path.join(__dirname,"../../data/airports.csv"));
    for (const a of airports){
        const city = await cityRepo.findOneBy({ id : Number(a.city_id)});
        if(city){
            await airportRepo.save({
                id : Number(a.id),
                icao_code : a.icao_code,
                iata_code : a.iata_code,
                name : a.name,
                type : a.type,
                latitude_deg : parseFloat(a.latitude_deg),
                longitude_deg : parseFloat(a.longitude_deg),
                elevation_ft : isNaN(parseFloat(a.elevation_ft)) ? null : parseFloat(a.elevation_ft),
                city,
            })
        }
    }

    console.log("Seed Completed");
    process.exit(0);
}

seed().catch((err)=>{
    console.error("Seed Failed:",err);
    process.exit(1);
})