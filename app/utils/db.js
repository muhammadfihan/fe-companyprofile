// utils/db.js

import { createConnection } from "mysql2";

// Konfigurasi koneksi database
const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "strapi",
});

// Test the connection
connection.connect((err) => {
  if (err) {
    console.error("Unable to connect to the database:", err);
  } else {
    console.log("Connection to the database has been established successfully.");
  }
});

export default connection;
