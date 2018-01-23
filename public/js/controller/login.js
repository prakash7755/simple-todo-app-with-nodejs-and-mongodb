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
                    if (data.isSuccess) {}
                    console.log(data)
                    // const {token} = data ;
                    // localStorage.token = token;
                    // $window.location.href='/#!/todos'
                })
                .catch(error => {
                    swal(
                        'Oops...',
                        error.message,
                        'error'
                    );
                })
        }
    }
})();