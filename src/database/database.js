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
} catch (error) {
    console.error("Error in the database: ", error)
}

module.exports = sequelize