const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const jokeRoutes = require('./routes/joke.routes');
app.use('/api', jokeRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
