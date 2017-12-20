'use strict';

const express = require('express');
const router = express.Router();
const { User } = require('../models');


/*
 *  User Register
 */

router.route('/register')
    .post((req, res, next) => {


        const { email, password } = req.body || {};

        if (!email || !password) {
            const error = console.error('Bad Requiest');
            return next(error)
        }

        const user = new User({
            email,
            password
        });
        user.save()
            .then(data => res.json(data))
            .catch(next)

    })



/*
 *  Login Verification
 */


router.post('/login', (req, res, next) => {

    const { email, password } = req.body || {};

    if (!email || !password) {
        const error = console.error('Bad Requiest');
        return next(error)
    }

    User.findOne({ email })
        .then(data => {
            if (data.password === password) {
                return res.send('Login Successfully')
            }

            return res.send('Wrong Password')

        })
        .catch(next)
})


/*
 * Error Handling
 */

router.use((error, req, res, next) => {
    const { message } = error || {};
    const isSuccess = false;
    res.json({ message, isSuccess })
})


module.exports = router