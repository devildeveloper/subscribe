angular.module('sendStudentData',['ngSails'])
		.config(['$sailsProvider', function ($sailsProvider) {
			$sailsProvider.url = 'http://localhost:1337';
		}])
		.controller('send',sendController);


function sendController($scope,$sails){
	$scope.loader  = false;
	$scope.success = false;
	$scope.error   = false;
	$scope.send=function(user){
		$scope.loader=true;
		$sails.post('/suscribe',{user:user})
			.success(function(data, status, headers, jwr){
				$scope.success=true;
				$scope.loader = false
				$scope.user = {} ;
			})
			.error(function(data, status, headers, jwr){
				$scope.error = true;
				$scope.errorLog = data + ' ' + status
			})
	},
	$scope.clear=function(){
		$scope.user={}
	}
}