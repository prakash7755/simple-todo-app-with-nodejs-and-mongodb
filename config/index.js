'use strict';
const passportSetUp = require('../config');
const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20');
const GoogleStrategy = require('passport-google').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const { User } = require('../models/');
const jwt = require('jsonwebtoken');




// passport.use(new GoogleStrategy({
//   callbackURL: "/auth/google/login",
//   clientID: keys.google.clientID,
//   clientSecret: keys.google.clientSecret,
//   profileFields: ['id', 'displayName', 'gender', 'email']
// }, (accessToken, refreshToken, profile, done) => {
//  console.log(profile.displayName)
//  console.log(profile.id)
// })
// );


passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:3000/auth/google/login',
    realm: 'http://localhost:3000/'
  },
  function(identifier, profile, done) {
    console.log(profile)
    done(null, profile);
}
));


passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: "/auth/fb/callback",
    profileFields: ['id', 'displayName', 'gender', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    done(null, profile)
  }
));