function withRouteAuth(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.redirect('/');
    }
}

function withApiAuth(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.status(401).json({ msg: 'Log in required' });
    }
}

module.exports = { withRouteAuth, withApiAuth };