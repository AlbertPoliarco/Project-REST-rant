const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Cyber World',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/cyber.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/quest.jpg'
      }]
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })

  
module.exports = router