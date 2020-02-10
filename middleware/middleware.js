var jwt = require('jsonwebtoken');

module.exports = authMid = (req, res, next) => {
    const currentPath = req.originalUrl;
    const token = req.body.token;

    if(currentPath === '/' || currentPath ==='/users/login') {
        // home page dont need an auth
        return next()
    } else {
        if(token) {
            // this 'wiefoiwniubcwb782223' is secret key
            jwt.verify(token, 'wiefoiwniubcwb782223', (err, decoded) => {
                if(err) {
                    return res.json(err)
                } else {
                    // token is valid
                    // next() means that the request will be passed to route
                    next()
                }
            })
        } else {
            // redirect to login
        }
    }
}