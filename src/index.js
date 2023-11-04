const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');
const jobs = require('./utils/job');
const app = express()
const TicketController = require('./controllers/ticket-controllers');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/api/v1/tickets', TicketController.create);

const setupAndStartServer = () => {
    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

    // sendBasicEmail(
    //     'aktfang@gmail.com', //Sender gmail is same as. we had used during smtp server setup
    //     'aktfang@gmail.com',
    //     'This is a testing email',
    //     'hey , how are you , I hoper you like the support'
    // );

    jobs();

    
}

setupAndStartServer();

