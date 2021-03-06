const jwt = require('jsonwebtoken');
const config = require("config");

module.exports = function (req, res, next) {
    const token = req.headers['x-auth-token'];
    //const token = req.header('x-auth-token);
    //console.log(req)
    //check if token exists
    if (!token) {
        return res.status(401).json({ msg: "No Token - Authorization Denied" });
    }
    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({ msg: "Token not authorized." });
    }

}