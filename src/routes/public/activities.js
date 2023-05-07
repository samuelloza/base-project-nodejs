const { Router } = require('express')
const Activities = require('../../controllers/activitiesController')

const router = Router()

/**
 * @swagger
 * /activities:
 *   get:
 *     summary: Retorna una lista de ejemplos
 *     tags: [Example]
 *     responses:
 *       200:
 *         description: Éxito
 */
router.get('/activities', Activities.getActivitiesController)

module.exports = router