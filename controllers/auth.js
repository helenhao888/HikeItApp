var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    console.log("auth route");
    app.get('/', authController.home)

    app.get('/logout', authController.logout);

    app.get('/dashboard', isLoggedIn, authController.dashboard)

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',

        failureRedirect: '/'
       //  ,        flash
       //use passport flash to handle error message from done callback func
    }
    ));


    // @route POST /login
    // @desc logs in a user
    app.post('/login', passport.authenticate('local-signin'),
        function (req, res) {
            res.redirect('/dashboard')
        }
    )

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }


}


