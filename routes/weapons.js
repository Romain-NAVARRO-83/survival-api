const express = require('express');
const router = express.Router();
const { Weapon } = require('../models');

router.get('/', async (req, res) => {
    try {
        const weapons = await Weapon.findAll();
        res.json(weapons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, level, damage, rate_of_fire, range, id_bearer, id_user } = req.body;
        const weapon = await Weapon.create({ name, level, damage, rate_of_fire, range, id_bearer, id_user });
        res.json(weapon);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
