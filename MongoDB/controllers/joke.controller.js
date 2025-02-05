const Joke = require('../models/joke.model');

module.exports = {
    // Get all jokes
    getAllJokes: async (req, res) => {
        try {
            const jokes = await Joke.find();
            res.json(jokes);
        } catch (err) {
            res.status(400).json({ message: "Error fetching jokes", error: err });
        }
    },

    // Get one joke by ID
    getJokeById: async (req, res) => {
        try {
            const joke = await Joke.findById(req.params.id);
            res.json(joke);
        } catch (err) {
            res.status(400).json({ message: "Joke not found", error: err });
        }
    },

    // Create a new joke
    createJoke: async (req, res) => {
        try {
            const newJoke = await Joke.create(req.body);
            res.json(newJoke);
        } catch (err) {
            res.status(400).json({ message: "Error adding joke", error: err });
        }
    },

    // Update a joke by ID
    updateJoke: async (req, res) => {
        try {
            const updatedJoke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedJoke);
        } catch (err) {
            res.status(400).json({ message: "Error updating joke", error: err });
        }
    },

    // Delete a joke by ID
    deleteJoke: async (req, res) => {
        try {
            await Joke.findByIdAndDelete(req.params.id);
            res.json({ message: "Joke deleted successfully" });
        } catch (err) {
            res.status(400).json({ message: "Error deleting joke", error: err });
        }
    },

    // Get a random joke
    getRandomJoke: async (req, res) => {
        try {
            const jokes = await Joke.find();
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            res.json(randomJoke);
        } catch (err) {
            res.status(400).json({ message: "Error fetching random joke", error: err });
        }
    }
};
