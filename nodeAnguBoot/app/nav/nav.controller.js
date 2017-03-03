(function() {
    'use strict';
    angular.module('app.nav')
        .controller('NavHomeCtrl', homeCtrl);


    homeCtrl.$inject = ['$scope'];
    function homeCtrl($scope) {
			var vm = $scope.vm = {};
			vm.name = "sanjin";
        
    }

})();