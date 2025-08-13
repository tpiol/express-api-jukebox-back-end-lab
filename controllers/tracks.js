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

router.get("/", async (req, res) => {
    try {
        const foundTracks = await Track.find();
        res.status(200).json(foundTracks);

    } catch (err) {
        res.status(500).json({ err: err.message });
    }

});

// GET /tracks/:id      | SHOW

router.get("/:trackId", async (req, res) => {
try {
    const foundTrack = await Track.findById(req.params.trackId);
    if (!foundTrack) {
        res.status(404);
        throw new Error("Track not found");
    }
    res.status(200).json(foundTrack);
} catch (err) {
    if (res.statusCode === 404) {
        res.json({ err: err.message })
    } else {
        res.status(500).json({ err: err.message });
    }
}
});

// PUT /tracks/:id      | UPDATE

// DELETE /tracks/:id   | DELETE
router.delete("/:trackId", async (req, res) => {
try {
    const deletedTrack = await Track.findByIdAndDelete(req.params.trackId);
    if (!deletedTrack) {
        res.status(404);
        throw new Error("Track not found");
    }
    res.status(200).json(deletedTrack);
} catch (err) {
    if (res.statusCode === 404) {
        res.json({ err: err.message })
    } else {
        res.status(500).json({ err: err.message });
    }
}
});


module.exports = router;