const jwt = require('jsonwebtoken');

function authenticateUser(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null || token == undefined) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
        if (error) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = { authenticateUser };