const express = require('express');
const cors = require('cors');

const app = express();
const port = 3052;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
