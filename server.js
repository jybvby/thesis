const express = require('express');
const path = require('path');
const mysql = require('mysql')
const fetch = require('node-fetch'); // For making API requests
const app = express();
const port = 3000;

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
app.use(express.json());

const connection = mysql.createConnection({
    // Your MySQL connection details
});

app.post('/api/search-images', async (req, res) => {
    const searchTerm = req.body.searchTerm;
    const unsplashApiKey = 'YOUR_UNSPLASH_API_KEY';
    const unsplashUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${unsplashApiKey}`;

    try {
        const unsplashResponse = await fetch(unsplashUrl);
        const unsplashData = await unsplashResponse.json();
        const imageUrls = unsplashData.results.slice(0, 3).map(result => result.urls.regular);

        // Store search query and results in the database
        connection.query('INSERT INTO image_searches (search_term, image_urls) VALUES (?, ?)', [searchTerm, JSON.stringify(imageUrls)], (err) => {
            if (err) console.error("Database error:", err);
        });

        res.json(imageUrls);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});


app.get('/outfitoutput', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'outfit.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}/`);
});