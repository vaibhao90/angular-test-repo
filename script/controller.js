function formController ($scope) {
    $scope.tasks = [];
 
    // $scope.reset = function() {
    //     $scope.user = angular.copy($scope.master);
    // };
    // $scope.counter = 0;
    $scope.add = function(task){
    	 if($scope.tasks.indexOf(task) == -1) {
    	     $scope.tasks.push(task);
    	    }else{   alert(task+" is already added"); } 
    }
    $scope.removeTask = function(count){
    	$scope.tasks.splice(count, 1);
    }
   // $scope.reset();
}