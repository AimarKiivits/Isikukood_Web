const express = require('express');
const app = express();

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const parseUrl = require('body-parser');
let encodeUrl = parseUrl.urlencoded({ extended: true });

app.get('/', (req, res) => {
    res.render('page', {data : null, error : 'none'});
});

const validId = require('./validate');

app.post('/', encodeUrl, (req, res) => {
    if (req.body.id_code === "") {
        res.render('page', {data : null, error : 'Input is empty.'});
    } else {
        let data = validId.idInfo(req.body.id_code);
        let error = data.error;
        if (error !== "none") {
            data = null;
        }
        res.render('page', {data : data, error: error});
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});