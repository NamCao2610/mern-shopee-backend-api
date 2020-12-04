const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, process.env.JWT_SECRET || 'namdepzai', (err, decode) => {
            if (err) {
                return res.status(401).send({ message: 'Sai token' });
            }
            req.user = decode;
            next();
        })
    } else {
        res.status(401).send({ message: 'Khong tim thay token' });
    }
}

module.exports = isAuth;