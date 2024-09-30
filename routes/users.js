const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { Survivor } = require('../models');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        const usersJson = users.map(user => user.toJSON());
        console.log(usersJson);
        res.json(usersJson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// One user
router.get('/:id', async (req, res) => {
    const userId = parseInt(req.params['id']);
    console.log(userId);
    try {
        const user = await User.findByPk(userId, {
            include: {
                model: Survivor,  // Include the Survivor model
                as: 'survivors',  // Assuming you've set an alias for the relationship
            },
        });
        console.log(user);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;
