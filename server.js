const express = require('express');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3000;  

// json data parser
app.use(express.json());

// Static Asssest
app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();

// Templates engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); 
})

// app.listen(PORT, console.log(`Listening on port ${PORT}.`));