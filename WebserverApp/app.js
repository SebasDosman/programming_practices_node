require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials', (err) => {});

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        name: 'Sebastián Dosman'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Home',
        name: 'Sebastián Dosman'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Home',
        name: 'Sebastián Dosman'
    });
});

app.get('*', (req, res) => {
    res.render('page-not-found', {
        title: 'Home',
        name: 'Sebastián Dosman'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${ port }`);
})