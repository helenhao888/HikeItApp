var exports = module.exports = {};
var path = require("path");

exports.home = function (req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
}
exports.dashboard = function (req, res) {
    res.sendFile(path.join(__dirname, '../views/dashboard.html'));
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');

    })
}