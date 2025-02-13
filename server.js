const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Static dosyalar için ana dizini kullan
app.use(express.static(path.join(__dirname)));

// Ana sayfa route'u
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
