const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "kaveen@7815840", // Replace with your MySQL password
  database: "users", // Replace with your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL server");
});

module.exports = connection;
