var app = angular.module("app", []);

app.controller('readmoreCntroller',function($scope){
	$scope.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non vulputate nisl. Curabitur placerat tincidunt nisl eu gravida. Phasellus vitae consequat neque, sed scelerisque ipsum. Nunc dictum consequat sem, tincidunt rhoncus orci hendrerit nec. Fusce vel dictum felis. Nam non risus nisl. Etiam fermentum ut ligula sed porta. Aenean consequat feugiat nulla at vulputate. Maecenas non risus nisl. Pellentesque dolor ex, venenatis at justo a, porttitor elementum mi. Etiam rutrum ac urna vitae egestas. Morbi efficitur ipsum nisi.";
    //$scope.text="hj";
});

app.directive('hmRead', function () {
    return {
    	restrict:'AE',
    	scope:{
    		hmtext : '@',
    		hmlimit : '@',
    		hmfulltext:'@',
            hmMoreText:'@',
            hmLessText:'@',
            hmMoreClass:'@',
            hmLessClass:'@'
    	},
        templateUrl: 'template.html',
        controller : function($scope){
        	  $scope.toggleValue=function(){

                    if($scope.hmfulltext == true)
                        $scope.hmfulltext=false;
                    else if($scope.hmfulltext == false)
                        $scope.hmfulltext=true;
                    else
                        $scope.hmfulltext=true;
              }        
        }
    };
});

