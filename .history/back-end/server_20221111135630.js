const express = require('express');
const app = express();
const port = 3001;


app.get("/", (req, res) => {

});

app.listen(port, () => console.log(`app listening on port ${port}`));