const express = require('express');
const Image = require('../models/image.models');  // Import the image model

const router = express.Router();

// Route to generate image using Hugging Face API
router.post('/generate-image', async (req, res) => {
  const { prompt, model } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: 'Prompt is required' });
  }

  try {
    // Using Pollinations.ai as a free alternative (no token needed)
    
    // Pollinations.ai is a free image generation API
    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
    
    // Fetch the image
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      console.error('Pollinations API Error:', response.statusText);
      return res.status(response.status).json({ 
        message: 'Failed to generate image', 
        error: 'Image generation service unavailable' 
      });
    }

    const imageBuffer = await response.arrayBuffer();
    const base64Image = `data:image/jpeg;base64,${Buffer.from(imageBuffer).toString('base64')}`;

    res.status(200).json({ 
      success: true,
      image: base64Image 
    });
  } catch (err) {
    console.error('Error generating image:', err);
    res.status(500).json({ message: 'Error generating image', error: err.message });
  }
});

// Route to save generated image
router.post('/save-image', async (req, res) => {
  const { image, prompt } = req.body;

  // Validate input
  if (!image || !prompt) {
    return res.status(400).json({ message: 'Image and prompt are required' });
  }

  try {
    // Create a new image document in the database
    const newImage = new Image({
      image,  // Assuming image is a base64 string or URL
      prompt
    });

    // Save the new image to the database
    await newImage.save(); 

    // Send the response with the saved image
    res.status(200).json({
      message: 'Image saved successfully',
      image: newImage,  // Send the saved image object (including ID)
    });
  } catch (err) {
    console.error("Error saving image:", err);
    res.status(500).json({ message: 'Error saving image to DB' });
  }
});

// Route to fetch all saved images
router.get('/get-images', async (req, res) => {
    try {
      const images = await Image.find().sort({ createdAt: -1 });  // Find all images, newest first
      res.status(200).json(images); 
       // Return the list of images
    } catch (err) {
      console.error("Error fetching images:", err);
      res.status(500).json({ message: 'Error fetching images from DB' });
    }
  });

// Route to get trending images (most liked)
router.get('/trending', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const trendingImages = await Image.find()
      .sort({ likes: -1 }) // Sort by likes descending
      .limit(limit);
    res.status(200).json(trendingImages);
  } catch (err) {
    console.error("Error fetching trending images:", err);
    res.status(500).json({ message: 'Error fetching trending images' });
  }
});

// Route to like an image
router.post('/like/:imageId', async (req, res) => {
  const { imageId } = req.params;
  const { userId } = req.body; // Can be a session ID or user ID

  try {
    const image = await Image.findById(imageId);
    
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    // Check if user already liked this image
    const alreadyLiked = image.likedBy.includes(userId);

    if (alreadyLiked) {
      // Unlike: Remove user from likedBy array and decrement likes
      image.likedBy = image.likedBy.filter(id => id !== userId);
      image.likes = Math.max(0, image.likes - 1);
    } else {
      // Like: Add user to likedBy array and increment likes
      image.likedBy.push(userId);
      image.likes += 1;
    }

    await image.save();

    res.status(200).json({ 
      success: true, 
      likes: image.likes,
      liked: !alreadyLiked 
    });
  } catch (err) {
    console.error("Error liking image:", err);
    res.status(500).json({ message: 'Error liking image' });
  }
});
  
module.exports = router;
