const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const partialPath = path.join(__dirname, '../partial')
app.set('view engine', 'hbs');
hbs.registerPartials(partialPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'hiren'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'hiren'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'helping...',
        name: 'hiren'
    })
})


app.get('/wether', (req, res) => {
    if (!req.query.adress) {
        return res.send({
            error: 'you must provide adress'
        })
    }

    geocode(req.query.adress, (error, { latitude, longtitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longtitude, (error, forecastData) => {
            if (!forecastData) {
                return res.send({ error })
            }
            res.send({
                place: req.query.adress,
                location,
                temperature: forecastData
            })
        })

    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        page: 'help article',
        name: 'hiren'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        page: 'page'
    })
})






app.listen(port, () => {
    console.log('server is up on port '+ port);
})