(function(){
    'use strict';
    angular.module('app.nav',[])
        .config(config);

    config.$inject=['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                cache: false,
                abstract: false,
                controller: 'NavHomeCtrl',
                templateUrl: 'nav/home.html'
            })
				.state('login',{
					url:'/login',
					templateUrl:'nav/login.html'
				});
    }

})();