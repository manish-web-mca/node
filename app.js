const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const app = express();
const publicDirPath = path.join(__dirname, '/public');
const viewPath = path.join(__dirname, '/templets/views');
const partialsPath = path.join(__dirname, '/templets/partials');

app.use(express.static(publicDirPath));

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render('index',{
        title : 'Home',
        page_content : 'This is home page'
    });
});

app.get('/help', (req, res) => {
    res.render('index',{
        title : 'Help',
        page_content : 'This is help page'
    });
});

app.get('/about', (req, res) => {
    res.render('index',{
        title : 'About',
        page_content : 'This is about page'
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'The address is not found'
        })
    }
    console.log(req.query);
    forecast(req.query.address, (error, data) => {
        if (error) {
            return res.send({
               error : error
            })
        } else {
            return res.send({
                forecast: data,
                location : '',
                address : req.query.address
            })           
        }
    })    
});

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'The search term is not found'
        })
    }
    console.log(req.query);
    res.send({
        products: []
    })
});

app.get('*', (req, res) => {
    res.render('pagenotfound',{
        title : '404 Page',
        page_content : 'This page is not found in server'
    });
});

app.listen(3000, () => {
    console.log('Node server started on port 3000 ...');
})

//console.log(process.argv)