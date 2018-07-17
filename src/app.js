const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./routes/payslip');
const { PORT } = require('./config');

const router = new Routes(express.Router()).routes();

const app = express();

try {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/', router);
    app.get('*', (req, res) => {
        return res.status(404).send('Page not found');
    });

    app.listen(PORT);
} catch (e) {
    console.log('App crashed throwing:', e);
}

module.exports = app;
