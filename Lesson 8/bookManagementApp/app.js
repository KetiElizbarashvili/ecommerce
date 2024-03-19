const express = require("express");
const port = 3000;
const booksRoutes = require('./routes/books')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

app.use('/v1', booksRoutes);

// app.get('/v1/books', (req, res) => {
//     res.send(books);
// });

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})