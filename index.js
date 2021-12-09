require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => {
    res.render('Error404')
})
// GET /places
app.use("/places", require("./controllers/places"))

// Listen for connections
app.listen(process.env.PORT)
