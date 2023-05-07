const Sequelize = require('sequelize')

const getActivitiesService = async () => {
    let jsonData = null   
    try {
        //const reclamo = await Reclamos.create(jsonDatos.reclamo)
        jsonData = { "status": "Ok", data: "1" }
    } catch (error) {
        console.log(error)
        jsonData = { "status": "fail", "error" : "Error get Activities" }
    }
    return jsonData
}

module.exports = {
    getActivitiesService
}