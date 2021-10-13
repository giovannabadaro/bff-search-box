const express = require('express')
const router = express.Router()

const items = require('./items.routes')
const itemDescription = require('./itemDescription.routes')

router.use('/api/items', items)
router.use('/api/items', itemDescription)

module.exports = router
