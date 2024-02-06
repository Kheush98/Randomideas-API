const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

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
router.get('/', async (request, response) => {
    try {
        const ideas = await Idea.find();
        response.json({ success: true, data: ideas });
    } catch (error) {
        console.log(error);
        response.status(500).json({ success: false, error: 'Something went wrong' })
    }
});

// Get a single idea
router.get('/:id', async (request, response) => {
    try {
        const idea = await Idea.findById(request.params.id);
        response.json({ success: true, data: idea});
    } catch (error) {
        console.log(error);
        response.status(500).json({success: false, error: 'Something went wrong !'})
    }
    
});

// Post a idea
router.post('/', async (request, response) => {
    const idea = new Idea({
        text: request.body.text,
        tag: request.body.tag,
        username:request.body.username
    });

    try {
        const saveIdea = await idea.save();
        response.json({ success: true, data: saveIdea});
    } catch (error) {
        console.log(error);
        response.status(500).json({ success: false, error: 'Something went wrong' })
    }
});

// Delete an idea
router.delete('/:id', async (request, response) => {
    try {
        const idea = await Idea.findByIdAndDelete(request.params.id);
        response.json({ success: true});
    } catch (error) {
        console.log(error);
        response.status(500).json({ success: false, error: 'Something went wrong' })
    }
    
});

// Update an idea
router.put('/:id', async (request, response) => {
    try {
        const idea = await Idea.findById(request.params.id);
    
        idea.text = request.body.text || idea.text;
        idea.tag = request.body.tag || idea.tag;
    
        response.json({ success: true, data: idea});
        
    } catch (error) {
        console.log(error);
        response.status(500).json({ success: false, error: 'Something went wrong' });
    }
});

module.exports = router;