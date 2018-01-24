'use strict';
(function() {
    angular.module('myApp')
        .factory('UserAuth', ['$http', '$location', '$window', UserAuth]);

    function UserAuth($http, $location, $window) {

        const setToken = token => localStorage.token = token;

        /*
         * Login Method
         */

        function login(data) {
            return $http.post('/auth/login', data)
                .then((res) => {
                    setToken((res.data || {}).token)
                    $location.url('/todos')
                    return res.data
                })
                .catch(error => {
                    console.log(error)
                    throw error 
                    return error
                });
        }
        
        /*
         * Register User Method
         */
        function register(data) {
           return $http.post('/auth/register', data)
                .then((res) => {
                    console.log(res.data)
                    setToken((res.data || {}).token)
                    $location.url('/todos')
                    return res.data
                })
                .catch(error => {
                    throw error;
                    return error
                });
        }




        return {
            login,
            register
        }
    }
})();