'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const dotenv = require('dotenv')

const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const db = require('./database/database')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

// Swagger configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      description: 'Api test',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./src/routes/**/*.js']
}

const specs = swaggerJsdoc(options)

// Routes
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('/api/v1', require('./routes/public'))
//app.use('/api', autenticar, require('./routes/admin'))

app.listen(port, () => {
  db.sync({ force: false, alter: false })
    .then(() => {
      console.info('Successful Database')
      console.info('Port: ', port)
    })
    .catch(error => {
      console.info('Error in the database')
      console.info(error)
    })
})
