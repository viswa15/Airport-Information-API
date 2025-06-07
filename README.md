<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px;">
  <h1>✈️ Airport Information API</h1>
  <p>This project is a simple RESTful API built with <strong>Express.js</strong>, <strong>TypeORM</strong>, and <strong>SQLite</strong>. It allows you to retrieve detailed information about airports, including their city and country, using IATA codes.</p>

  <h2>📦 Features</h2>
  <ul>
    <li>Fetch airport data by IATA code</li>
    <li>View airport details, city, and country info</li>
    <li>CSV-based data import for: Countries, Cities, Airports</li>
    <li>SQLite as the database (easy to run locally)</li>
    <li>Seeding script to populate the database from CSV files</li>
  </ul>

  <h2>🗂️ Project Structure</h2>
  <pre><code>airport-api/
├── data/
│   ├── countries.csv
│   ├── cities.csv
│   └── airports.csv
├── src/
│   ├── config/
│   │   └── data-source.js
│   ├── entities/
│   │   ├── Airport.js
│   │   ├── City.js
│   │   └── Country.js
│   ├── routes/
│   │   └── airport.routes.js
│   └── seed/
│       └── seed.js
├── app.js
├── package.json
└── README.md</code></pre>

  <h2>🚀 Getting Started</h2>

  <h3>1. Clone the repository</h3>
  <pre><code>git clone https://github.com/your-username/airport-api.git
cd airport-api</code></pre>

  <h3>2. Install dependencies</h3>
  <pre><code>npm install</code></pre>

  <h3>3. Place your CSV data</h3>
  <p>Add the following CSV files inside the <code>/data</code> folder:</p>
  <ul>
    <li>countries.csv</li>
    <li>cities.csv</li>
    <li>airports.csv</li>
  </ul>
  <p><em>Make sure these files match the format used in the seed script.</em></p>

  <h3>4. Seed the database</h3>
  <pre><code>npm run seed</code></pre>

  <h3>5. Start the server</h3>
  <pre><code>npm start</code></pre>

  <h2>📡 API Endpoint</h2>

  <h3>Get Airport by IATA Code</h3>
  <p><strong>GET</strong> <code>/api/airport/:iata_code</code></p>

  <h4>Example:</h4>
  <pre><code>GET http://localhost:3000/api/airport/DEL</code></pre>

  <h4>Response:</h4>
  <pre><code>{
  "airport": {
    "id": 123,
    "icao_code": "VIDP",
    "iata_code": "DEL",
    "name": "Indira Gandhi International Airport",
    "type": "large_airport",
    "latitude_deg": 28.5665,
    "longitude_deg": 77.1031,
    "elevation_ft": 777,
    "address": {
      "city": {
        "id": 456,
        "name": "New Delhi",
        "lat": 28.6139,
        "long": 77.209,
        "is_active": true,
        "country_id": 91
      },
      "country": {
        "id": 91,
        "name": "India",
        "country_code_two": "IN",
        "country_code_three": "IND",
        "mobile_code": 91,
        "continent_id": 4
      }
    }
  }
}</code></pre>

  <h2>🛠️ Technologies Used</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>TypeORM</li>
    <li>SQLite</li>
    <li>csvtojson</li>
  </ul>

  <h2>📌 Notes</h2>
  <ul>
    <li>This project uses SQLite for simplicity. You can switch to MySQL or PostgreSQL by updating the TypeORM config.</li>
    <li>Elevation values are nullable. The seed script handles missing or invalid elevation values gracefully.</li>
  </ul>

  <h2>🧑‍💻 Author</h2>
  <p><strong>Viswa Tummala</strong></p>

  <h2>📃 License</h2>
  <p>This project is licensed under the MIT License.</p>
</body>
</html>
