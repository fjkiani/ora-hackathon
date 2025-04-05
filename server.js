require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:3000', // Your React app's URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

app.post('/api/claude', async (req, res) => {
  try {
    console.log("Making request to Claude API with key:", 
      process.env.REACT_APP_ANTHROPIC_API_KEY ? 
      process.env.REACT_APP_ANTHROPIC_API_KEY.substring(0, 10) + "..." : 
      "undefined");
    
    const response = await axios.post('https://api.anthropic.com/v1/messages', req.body, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error proxying to Claude API:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: true,
      message: error.response?.data?.error?.message || error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
}); 