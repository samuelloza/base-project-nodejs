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
//const { autenticar } = require('./middlewares/accessMiddleware')

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
        title: 'Mi API',
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
  
  // Generar la documentación de Swagger
  const specs = swaggerJsdoc(options)
  
  // Agregar el middleware de Swagger
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))

  
// Routes
app.use('/api/v1', require('./routes/public'))
//app.use('/api', autenticar, require('./routes/admin'))

app.listen(port, () => {
    db.sync({ force: false, alter: false })
    .then(() => {
        console.info('Successful Database')
        console.info('Port: ', port)
    })
    .catch(error=>{
        console.info('Error in the database')
        console.info(error)
    })
})
