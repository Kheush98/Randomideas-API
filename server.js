const path = require('path');
const express = require("express");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

// Static folder
app.use(express.static(path.join(__dirname, 'public')));
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    response.send({message: 'Welcome to the Randomideas App'});
});

const ideasRouter = require('./routes/ideas');

app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server is listening in port ${port}`));