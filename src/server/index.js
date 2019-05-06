const express = require('express');

const app = express();

const ROUTES = require('./utils/routes');

const User = require('./api/UserApi');

app.use(express.static('dist'));
app.use(ROUTES.USER, User);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
