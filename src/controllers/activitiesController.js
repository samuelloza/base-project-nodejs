const { 
   getActivitiesService
 } = require('../services/activitiesService')
 
 const getActivitiesController = async (req, res) => {
    try {
       res.send( await getActivitiesService() )
    } catch (error) {
       console.info("Error: ", error)
    }
 }
 

 module.exports = {
   getActivitiesController
 }
