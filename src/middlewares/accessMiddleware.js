const jwt = require('jsonwebtoken')

const autenticar = (req, res, next) => {
    try {
        // console.info(req.headers['authorization'])
        const bearerHeader = req.headers['authorization']
    
        if (typeof bearerHeader !== 'undefined') {
            const bearerToken = bearerHeader.split(' ')[1]
            jwt.verify(bearerToken, process.env.JWTSECRET, (error, authData) => {
                if (error) {
                    res.status(401).json({ 
                        error: 401, 
                        mensaje: 'Problemas para acceder a este recurso.'
                    })
                }
            })
            next()
        } else {
            res.status(401).json({ error: 401, mensaje: 'No tiene autorización para acceder a este recurso.' })
        }
    } catch (error) {
        console.info(error)
    }
}

module.exports = { autenticar }
