'use strict';
(function() {
    angular.module('todoApp')
        .factory('UserAuth', ['$http', UserAuth]);

    function UserAuth($http) {

        /*
         * Login Method
         */

        function login(data) {
            return $http.post('/auth/login', data)
                .then((res) => {
                    return res.data
                })
                .catch(err => {
                    console.error(err)
                });
        }

        function register(data) {
           return $http.post('/auth/register', data)
                .then((res) => {
                    return res.data
                })
                .catch(err => {
                    console.error(err)
                });
        }




        return {
            login,
            register
        }
    }
})();