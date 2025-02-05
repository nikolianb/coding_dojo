const mongoose = require('mongoose');
require('dotenv').config(); 

const uri = process.env.DB_URI;

if (!uri) {
    console.error("❌ Error: Missing MongoDB connection string in .env file.");
    process.exit(1);
}

mongoose.connect(uri)
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch(err => console.error("❌ Error connecting to MongoDB Atlas:", err));
