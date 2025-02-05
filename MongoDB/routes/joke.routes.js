const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/joke.controller');

router.get('/jokes', jokeController.getAllJokes);
router.get('/jokes/random', jokeController.getRandomJoke);
router.get('/jokes/:id', jokeController.getJokeById);
router.post('/jokes', jokeController.createJoke);
router.put('/jokes/:id', jokeController.updateJoke);
router.delete('/jokes/:id', jokeController.deleteJoke);

module.exports = router;
