const express = require("express");

const app = express();
const port = 5000;
const ideas = [
    {
        id: 1,
        text: 'Les Enjeux Éthiques et les Débats Actuels',
        tag: 'Technology',
        username: 'TonyStark',
        date: '2024-01-25'
    },
    {
        id: 2,
        text: 'Comprendre l\'IA en Termes Simples',
        tag: 'Inventions',
        username: 'JohnDoe',
        date: '2024-01-25'
    },
    {
        id: 3,
        text: 'Un Voyage à Travers l\'Histoire',
        tag: 'Software',
        username: 'SteveRog',
        date: '2024-01-25'
    }
]
app.get('/', (request, response) => {
    response.send({message: 'Hello world'});
});

app.get('/api/ideas', (request, response) => {
    response.send(ideas);
})

app.get('/api/ideas/:id', (request, response) => {
    const idea = ideas.find((idea) => idea.id === +request.params.id);

    if (!idea) {
        return response.status(404).json({ success: false});
    }

    response.json({ success: true, data: idea});
})

app.listen(port, () => console.log(`Server is listening in port ${port}`));