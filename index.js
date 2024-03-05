const express = require('express');
const app = express();

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const parseUrl = require('body-parser');
let encodeUrl = parseUrl.urlencoded({ extended: true });

app.get('/', (req, res) => {
    res.render('validate_form');
});

const validId = require('./validate');

app.post('/validate', encodeUrl, (req, res) => {
    res.render('validate_result', validId.idInfo(req.body.id_code));
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});