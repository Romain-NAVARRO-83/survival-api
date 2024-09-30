const express = require('express');
const router = express.Router();
const { Survivor } = require('../models');
const genererNom = require('./utils/nameMachine');

router.get('/', async (req, res) => {
    try {
        const survivors = await Survivor.findAll();
        res.json(survivors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, user_id, level, XP } = req.body;
        // console.log("req" + JSON.stringify(req.body));
        const newName = genererNom().replace(/\s+/g, '-');;
        console.log("nn" + newName);
        const survivor = await Survivor.create({ newName, user_id, level, XP });
        res.json(survivor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Get user survivors
// router.get('/', async (req, res) => {
//     try {
//         const survivors = await Survivor.findAll();
//         res.json(survivors);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

module.exports = router;
