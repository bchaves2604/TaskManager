'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.directive('ngConfirmClick', [
    function(){
        return {
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind('click',function (event) {
                    if ( window.confirm(msg) ) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
}])

.controller('View1Ctrl', function($scope, $http, $window) {
	 $http.get('http://localhost:8080/getPendingTasks').
        then(function(response) {
            $scope.getTaskList = response.data;           
        });

      $scope.SendTask=function() {
		   var data=$.param({
	               name: $scope.name,
	               dueDate: $scope.dueDate
	           });
		   var config = {
	                headers : {
	                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
	                }
	            }
	       $http.post('http://localhost:8080/addTask',data, config).
	       then(function (response) {
	           $scope.addTask = response.data;
	           $window.location.reload();
	       });
   		}	
	   $scope.SearchTask=function() {
		   var config = {
	                params:{name: $scope.searchTaskInput}
	            }

	   		$http.get('http://localhost:8080/searchTask',config).
	        then(function (response) {
	            $scope.searchTask = response.data;    
	            $scope.searchTaskName=response.data.name;
	            $scope.searchTaskId=response.data.id;
	            $scope.searchTaskDueDate=response.data.dueDate;  
	        });
		}
		$scope.CompleteTask=function(taskId) {
		   var config = {
	                params:{name: taskId}
	            }
	   		$http.get('http://localhost:8080/completeTask?id='+taskId,config).
	        then(function (response) {
	            $window.location.reload();
	        });
		}

		$scope.DeleteTask=function(taskId){
			var config = {
	                params:{name: taskId}
	            }
	   		$http.get('http://localhost:8080/deleteTask?id='+taskId,config).
	        then(function (response) {
	            $window.location.reload();
	        });
		}

		$scope.FillForm=function(taskId){
			var config = {
	                params:{name: taskId}
	            }
	   		$http.get('http://localhost:8080/searchTask?='+taskId,config).
	        then(function (response) {
	        	$scope.taskNameEdit = response.data.name;    
	            $scope.taskDueDateEdit=response.data.dueDate;
	        });
		}

		$scope.UpdateTask=function(taskId){
			console.log(document.getElementById("taskDueDateEdit").value);
			var config = {
	                params:{id: taskId, 
	                		name: document.getElementById("taskNameEdit").value,
	                		dueDate: document.getElementById("taskDueDateEdit").value
	                }
	            }
	   		$http.get('http://localhost:8080/updateTask',config).
	        then(function (response) {
	        	console.log("wefwefwe");
	            $window.location.reload();
	        });
		}

	}
);