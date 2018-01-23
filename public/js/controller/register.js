'use strict';

(function() {
    angular.module('myApp')
        .controller('RegisterCtrl', ['UserAuth', RegisterCtrl])

    function RegisterCtrl(UserAuth) {
        const vm = this;
        vm.user = {}
        vm.registerForm = () => {
            UserAuth.register(vm.user)
                .then(data => {
                    console.log(data)
                    if (!data.isSuccess) {
                        swal(
                            'Oops...',
                            'This Email Already Exist!',
                            'error'
                        );
                        return
                    }
                    console.log(res.data)
                    $window.location.href = '/#!/todos'
                })
        }
    }
})();