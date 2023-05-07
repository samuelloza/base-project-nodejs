const { Router } = require('express')

const router = Router()
const activities = require('./activities')
router.use('/', activities)

module.exports = router