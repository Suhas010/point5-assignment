const DBURI = 'mongodb://admin:admin0101@ds151626.mlab.com:51626/pointfive';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const ROUTES = require('./utils/routes');

const Form = require('./api/formApi');

app.use(express.static('dist'));
mongoose
  .connect(DBURI, { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to :', DBURI);
  })
  .catch((error) => {
    console.error('Error connecting to :', DBURI, '\n', error);
  });

app.use(ROUTES.FROM, Form);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
