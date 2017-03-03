(function(){
'use strict';
   angular.module('app',
		['ui.router',
		'app.nav'
		
		]).run(indexRun);
			
		indexRun.$inject = ['$location'];
		function indexRun($location){
			
			$location.path('/home');
		}
		
})();
