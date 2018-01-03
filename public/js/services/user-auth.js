'use strict';
(function() {
    angular.module('myApp')
        .factory('UserAuth', ['$http', '$window', UserAuth]);

    function UserAuth($http, $window) {

        /*
         * Login Method
         */

        function login(data) {
            console.log(data)
            return $http.post('/auth/login', data)
                .then((res) => {
                    return res.data
                })
                .catch(err => {
                    console.error(err);
                    throw error 
                });
        }
        
        /*
         * Register User Method
         */
        function register(data) {
           return $http.post('/auth/register', data)
                .then((res) => {
                    return res.data
                })
                .catch(err => {
                    console.error(err);
                    throw error;
                });
        }




        return {
            login,
            register
        }
    }
})();