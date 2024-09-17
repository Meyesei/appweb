const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my first App');
});

app.listen(4200, () => {
    console.log("Server listening on port 4200");
});