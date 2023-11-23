const express = require('express')
const cors = require('cors');
const app = express()
const db = require('./db');
db();
const records = require('./routes/CustomerRecord');


app.use(express.json());
app.use(cors());


app.use('/api/users', records);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));