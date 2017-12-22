'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { User } = require('../models');
var jwt = require('jsonwebtoken');



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

        /*
         * Password Bcrypet
         */
        bcrypt.hash(password, 10)
            .then((password) => {
                const user = new User({
                    email,
                    password
                })
                return user.save()
            }, console.error('bad Requiest'))

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

            /*
             * Bcrypt Password Verification
             */

            console.log(password)
            console.log(data.password)
            bcrypt.compare(password, data.password)
                .then(isCorrect => {
                    if (!isCorrect) {
                        return res.status(401).json({
                            isSuccess: false,
                            message: 'Incorrect Password'
                        });
                    }

                    var token = jwt.sign({ password }, 'mySecret');
                    return res.json({token})
                })

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