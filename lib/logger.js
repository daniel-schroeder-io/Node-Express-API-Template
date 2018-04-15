module.exports = function (req, res, next) {
    console.log("== Got Request: ");
    console.log("   -- URL: ", req.url);
    console.log("   -- Method: ", req.method);
    next();
};