const express = require("express");

const app = express();
const port = 5000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    response.send({message: 'Welcome to the Randomideas App'});
});

const idesaRouter = require('./routes/ideas');

app.use('/api/ideas', idesaRouter);

app.listen(port, () => console.log(`Server is listening in port ${port}`));