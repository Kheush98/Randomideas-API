const express = require('express');
const router = express.Router();
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

// Get all ideas
router.get('/', (request, response) => {
    response.send(ideas);
})

// Get a single idea
router.get('/:id', (request, response) => {
    const idea = ideas.find((idea) => idea.id === +request.params.id);

    if (!idea) {
        return response.status(404).json({ success: false});
    }

    response.json({ success: true, data: idea});
});

// Post a idea
router.post('/', (request, response) => {
    const idea = {
        id: ideas.length + 1,
        text: request.body.text,
        tag: request.body.tag,
        username:request.body.username,
        date: new Date().toISOString().slice(0, 10)
    };

    ideas.push(idea);
    console.log(idea);

    response.json({ success: true, data: idea});
});

// Delete an idea
router.delete('/:id', (request, response) => {
    const id = +request.params.id;

    ideas.forEach((idea, index) => {
        if (idea.id === id) {
            ideas.splice(index, 1);
            return;
        }
    });

    response.json({ success: true, data: ideas});
});

// Update an idea
router.put('/:id', (request, response) => {
    const idea = ideas.find( (idea) => idea.id === +request.params.id);

    idea.text = request.body.text;
    idea.tag = request.body.tag;
    idea.username = request.body.username;

    response.json({ success: true, data: idea})
})
module.exports = router;