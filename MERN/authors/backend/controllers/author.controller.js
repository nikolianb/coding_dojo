const Author = require('../models/author.model');

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find().sort({ name: 1 });
    res.json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAuthor = async (req, res) => {
  try {
    const newAuthor = new Author(req.body);
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "We're sorry, but we could not find the author you are looking for." });
    }
    res.json(author);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedAuthor) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.json(updatedAuthor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.json({ message: "Author deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
