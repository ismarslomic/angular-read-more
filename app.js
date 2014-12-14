var app = angular.module("app", []);

app.controller('readmoreCntroller',function($scope){
	$scope.text = "hello there hello therehello therehello therehello therehello therehello therehello there hello therehello therehello therehello there ";
});

app.directive('hmRead', function () {
    return {
    	restrict:'AE',
    	scope:{
    		hmtext : '@',
    		hmlimit : '@',
    		hminit:'@'
    	},
        templateUrl: 'template.html',
        link : function(scope,elem,attr){
        		
        	
        
        }
    };
});

