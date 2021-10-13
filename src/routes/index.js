const express = require('express')
const router = express.Router()

const items = require('./items.routes')

router.use('/api/items', items)

module.exports = router
