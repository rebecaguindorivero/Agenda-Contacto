(function() {
    'use strict';

    angular
        .module('module')
        .controller('Controller', Controller);

    Controller.$inject = ['dependencies'];

    /* @ngInject */
    function Controller(dependencies){
        var vm = this;
        vm.property = 'Controller';


        activate();

        ////////////////

        function activate() {
        }
    }
})();
