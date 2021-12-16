const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/whatsAppening');
mongoose.connect('mongodb+srv://whatsAppening:whatsAppening@cluster0.a7rtk.mongodb.net/myFirstDatabase');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./users/service')(app);
require('./events/service')(app);
require('./posts/service')(app);

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT ||  4000);
