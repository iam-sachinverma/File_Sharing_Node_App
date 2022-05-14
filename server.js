const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;  

// json data parser
app.use(express.json());

// Static Asssest
app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();


app.use(bodyParser.json()); app.use(cookieParser()); app.use(cors())

// CORS
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(",")
}
app.use(cors(corsOptions))

// Templates engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index')
});

// Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); 
})

// app.listen(PORT, console.log(`Listening on port ${PORT}.`));