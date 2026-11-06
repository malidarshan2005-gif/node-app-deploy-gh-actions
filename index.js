const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello! My DevOps application is running.');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
