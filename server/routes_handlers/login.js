const jwt = require('jsonwebtoken');

function login(req, res) {
    /* POST: /login */
    const { username, password } = req.body;
    if (!username || !password) return res.sendStatus(400);

    const access_token = jwt.sign({ user: username }, process.env.SECRET_KEY);
    res.json({ access_token });
}

module.exports = login;