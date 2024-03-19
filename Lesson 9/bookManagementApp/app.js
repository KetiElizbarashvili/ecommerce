const express = require('express');
const port = 3000;
const v1Routes = require('./src/routes/v1');
const bodyParser = require('body-parser');
const sequelize = require('./src/util/db');
const app = express();

app.use(bodyParser.json());

app.use('/v1', v1Routes);

sequelize
    .sync()
    .then((result) => {
        console.log('Connection to database has been successful');
        app.listen(port, () => {
            console.log(`Server is listening at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.log(`Cant connect to database ${err}`);
    });

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection to database has been successful');
//     })
//     .catch((err) => console.log(`Cant connect to database ${err}`));
