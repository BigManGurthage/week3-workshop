const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Serve static files from the "www" directory
app.use(express.static(path.join(__dirname, 'www')));

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/homeroute.js').route(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
