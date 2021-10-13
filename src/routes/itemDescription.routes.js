const express = require('express')
const items = express.Router()

const getProductDescriptionController = require('../UseCases/GetProductDescription/getProductDescriptionController')

items.get('/:id', getProductDescriptionController)

module.exports = items
