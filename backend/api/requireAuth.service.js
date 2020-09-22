module.exports = {
    requireUser(req, res, next) {
        var user = req.session.currUser;
        if (!user) res.status(404).send('Not loged in');
        else next();
    },
    requireAdmin(req, res, next) {
        var user = req.session.currUser;
        if (!user || !user.isAdmin) res.status(404).send('Not Admin!');
        else next();
    }
}
    