const jwt = require('jsonwebtoken')

const autenticar = (req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization']
    
        if (typeof bearerHeader !== 'undefined') {
            const bearerToken = bearerHeader.split(' ')[1]
            jwt.verify(bearerToken, process.env.JWTSECRET, (error, authData) => {
                if (error) {
                    res.status(401).json({ 
                        error: 401, 
                        mensaje: 'Problems accessing this resource.'
                    })
                }
            })
            next()
        } else {
            res.status(401).json({ error: 401, mensaje: 'You are not authorized to access this resource.' })
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = { autenticar }
