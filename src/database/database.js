const { Sequelize } = require('sequelize')
const connection = require('./config')


const config = connection.mysqllocal
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.hostname,
        dialect: config.motorserver,
        pool: {
            idle: 120000,
            acquire: 120000
        }
    }
)

try {
    sequelize.authenticate()
    console.info("Autenticado en la Base de Datos")
} catch (error) {
    console.info("Error al autenticarse en la Base de Datos")
    console.info("Error: ", error)
}

module.exports = sequelize