const express = require('express');
const cors = require('cors');
require('dotenv').config();

const mysql = require('mysql');
const bodyParser = require('body-parser');

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'test_db'
});
// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + db.threadId);
});

const app = express();
app.use(cors());
app.use(express.json());

const students = 


app.get('/health', async (req, res) => {
  res.send("I am OK.");
});

app.get('/students', async (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Error fetching users');
      return;
    }
    res.json(results);
  });
  //res.send(students);
});


const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`Listening on ${port}`));