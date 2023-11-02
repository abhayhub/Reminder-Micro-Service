const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.get('/', (req, res) => res.send('Hello World!'))

const setupAndStartServer = () => {
    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
}

setupAndStartServer();

