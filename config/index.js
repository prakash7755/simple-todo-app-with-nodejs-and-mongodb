'use strict';
const passportSetUp = require('../config');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const { User } = require('../models/');





passport.use(new GoogleStrategy({
  callbackURL: '/auth/google/login',
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
 done(null, profile);


})
);



passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: '/auth/fb/callback',
    profileFields: ['id', 'displayName', 'gender', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));