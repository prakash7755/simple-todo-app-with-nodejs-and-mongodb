'use strict';

const router = require('express').Router();
const passport = require('passport');

   /*
    * Google Login User Verification
    */

router.get('/google',  passport.authenticate('google', { scope : ['profile']}));

router.get('/google/login', (req, res, next) => {
   const google = passport.authenticate('google', { scope: 'email' }, (err, user) => {
        if (user) {
            res.send(user.email)
        }
        if (err) {
            res.send(err)
        }
    });
google(req, res, next);
});


  /*
   * Facebook Login User Verification
   */


router.get('/fb',
    passport.authenticate('facebook', { scope: 'email' })
);

router.get('/fb/callback', (req, res, next) => {
    const fb = passport.authenticate('facebook', { scope: 'email' }, (err, user) => {
        if (user) {
            var token = jwt.sign({ password }, 'token');
             return res.json({token})

            // res.send(user)
        }
        if (err) {
            res.send(err)
        }
    });

    fb(req, res, next)
})
module.exports = router;