const router = require('express').Router()
var bodyParser = require('body-parser')
// const { route } = require('express/lib/application')
const places = require("../models/places.js")

var urlencodedParser = bodyParser.urlencoded({ extended: false })


// GET /places
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

// Add a Place
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
      req.body.city = 'Anytown'
  }
  if (!req.body.state) {
      req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  } else {
      res.render('places/show', {
          place: places[req.params.id],
          id: req.params.id
      })
  }

})
// Edit
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      res.render('places/edit', { place: places[id], id: req.params.id })
  }
})
// // Index
// router.get('/', (req, res) => {
//     let places = [{
//         name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: '/images/cyber.jpg'
//       }, {
//         name: 'Coding Cat Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: '/images/quest.jpg'
//       }]
//     res.render('places/index', { places })
// })

// router.post("/", urlencodedParser, (req, res) => {
//   const obj = JSON.parse(JSON.stringify(req.body))
//   console.log(obj);
//   res.send("POST /places")
// })

// POST /places
router.put('/:id', (req, res) => {
  console.log(req.body)
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      console.log(req.body)
      // Save the new data into places[id]
      places[req.params.id] = req.body
      res.redirect(`/places/${id}`)
  }
})



// Delete
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      places.splice(id, 1)
      res.redirect('/places')
  }
})

module.exports = router;