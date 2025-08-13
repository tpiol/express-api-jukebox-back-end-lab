const Track = require("../models/track.js");
const express = require("express");
const router = express.Router();

// POST /tracks         | CREATE

router.post("/", async (req, res) => {
    try {
        const createdTrack = await Track.create(req.body)
        res.status(201).json(createdTrack);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

// GET /tracks          | INDEX

// GET /tracks/:id      | SHOW

// PUT /tracks/:id      | UPDATE

// DELETE /tracks/:id   | DELETE



module.exports = router;