const router = require('express').Router()
const db = require('../models')

// Index route
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

// POST route
router.post('/', (req, res) => {
  if (req.body.pic === '') { req.body.pic = undefined}
  if (req.body.city === '') { req.body.city = undefined}
  if (req.body.state === '') { req.body.state = undefined}
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})
// Show Route
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router

// const places = require("../models/places.js")
// // var bodyParser = require('body-parser')


// // var urlencodedParser = bodyParser.urlencoded({ extended: false })


// // GET /places
// router.get('/', (req, res) => {
//   res.render('places/index', { places })
// })

// // Add a Place
// router.post('/', (req, res) => {
//   console.log(req.body)
//   if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//       req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//       req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// //NEW
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

// // SHOW

// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   } else {
//       res.render('places/show', {
//           place: places[req.params.id],
//           id: req.params.id
//       })
//   }

// })
// // Edit
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       res.render('places/edit', { place: places[id], id: req.params.id })
//   }
// })
// // // Index
// // router.get('/', (req, res) => {
// //     let places = [{
// //         name: 'H-Thai-ML',
// //         city: 'Seattle',
// //         state: 'WA',
// //         cuisines: 'Thai, Pan-Asian',
// //         pic: '/images/cyber.jpg'
// //       }, {
// //         name: 'Coding Cat Cafe',
// //         city: 'Phoenix',
// //         state: 'AZ',
// //         cuisines: 'Coffee, Bakery',
// //         pic: '/images/quest.jpg'
// //       }]
// //     res.render('places/index', { places })
// // })

// // router.post("/", urlencodedParser, (req, res) => {
// //   const obj = JSON.parse(JSON.stringify(req.body))
// //   console.log(obj);
// //   res.send("POST /places")
// // })

// // POST /places
// router.put('/:id', (req, res) => {
//   console.log(req.body)
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       console.log(req.body)
//       // Save the new data into places[id]
//       places[req.params.id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })



// // Delete
// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       places.splice(id, 1)
//       res.redirect('/places')
//   }
// })

// module.exports = router;