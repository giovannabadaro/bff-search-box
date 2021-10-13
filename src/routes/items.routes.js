const express = require('express')
const items = express.Router()

const getSearchedItemsController = require('../UseCases/GetSearchedItems/getSearchedItemsController')

items.get('/', getSearchedItemsController)

module.exports = items
