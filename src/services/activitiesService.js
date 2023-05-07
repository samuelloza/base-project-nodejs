const Sequelize = require('sequelize')

const getActivitiesService = async () => {
    let jsonData = null   
    try {
        jsonData = { "status": "Ok", data: "1" }
    } catch (error) {
        console.error(error)
        jsonData = { "status": "fail", "error" : "Error get Activities" }
    }
    return jsonData
}

module.exports = {
    getActivitiesService
}