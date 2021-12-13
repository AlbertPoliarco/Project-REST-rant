// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// Express Settings
app.use(express.static("public"))
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use("/places", require("./controllers/places"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))



// Home
app.get('/', (req, res) => {
    res.render('Home')
})
// Error 404
app.get('*', (req, res) => {
    res.render('Error404')
})
// Delete
router.delete('/places/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.send('STUB DELETE places/:id')
    }
  })

// Listen for connections
app.listen(process.env.PORT)
