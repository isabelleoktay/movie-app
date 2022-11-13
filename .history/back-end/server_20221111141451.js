const express = require('express');
const movieRoutes = require('./src/movie/routes');

const app = express();
const port = 3001;


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/v1/movie', movieRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));