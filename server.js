const mysql = require("mysql2");
const express = require("express");
const { ConsoleWriter } = require("istanbul-lib-report");
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username;
    user: "root",
    // Your MySQL password;
    password: "katoch13",
    database: "election",
  },
  console.log("Connect to the election database.")
);

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

//GET a single candidates
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM CANDIDATES WHERE ID = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//               VALUES (?,?,?,?)`;
// const params = [1, "Ronald", "Firbank", 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Default response for any other request(not found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
