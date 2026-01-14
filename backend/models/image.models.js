const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: {
    type: String, // Store Base64 encoded image
    required: true
  },
  prompt: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0 // Start with 0 likes
  },
  likedBy: {
    type: [String], // Array of user IDs or session IDs who liked the image
    default: []
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
