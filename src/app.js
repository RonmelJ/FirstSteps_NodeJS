const express = require('express')
const config = require('./config')

const productsRoutes = require('./routes/products.routes')

const app = express()

// settings
app.set('port', config.port || 3000)

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// routes
app.use(productsRoutes)

module.exports = app