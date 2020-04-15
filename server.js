const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database.config');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.NODE_PORT;

// Add x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Add application type
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

// Routes
require('./app/routes/sunnahPost.routes')(app);

// Define route
app.get('/', (req, resp) => {
  resp.json({ "data": true, "message": "Hello World" });
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


console.log(PORT);

app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});