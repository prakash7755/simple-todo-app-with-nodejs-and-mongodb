'use strict';
(function() {
    angular.module('myApp')
        .controller('LoginCtrl', ['UserAuth','$window', '$location', LoginCtrl])

    function LoginCtrl(UserAuth) {
        const vm = this;
        vm.user = {};
        vm.userLogin = () => {
            UserAuth.login(vm.user)
                .then(data => {
                })
                .catch(error => {
                    swal(
                        'Oops...',
                        error.data.message,
                        'error'
                    );
                })
        }
    }
})();