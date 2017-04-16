'use strict';


angular.module('employee-dir').controller('employee-dir-controller',['$scope', '$http',function($scope,$http){

  var getAllEmployees=function(){
         $http.get('/employee').then(function(response) {
         $scope.employees = response.data; 
         $scope.employee={};
        });
    };

  getAllEmployees();

  $scope.addEmployee = function() {
    if($scope.employee.name==undefined || 
       $scope.employee.email==undefined ||
       $scope.employee.dob==undefined ||
       $scope.employee.department==undefined ||
       $scope.employee.gender==undefined){
    }else{
      if($scope.employee.hasOwnProperty('_id')) {
          delete $scope.employee['_id'];
      }
      $http.post('/employee', $scope.employee).then(function(response) {
        getAllEmployees();
      });
    }
  };

  $scope.updateEmployee = function(employee) {
    employee.isEditable=false;
    $http.put('/employee/'+employee._id, employee).then(function(response) {
        getAllEmployees();
    });
  };

  $scope.removeEmployee = function(id) {
    $http.delete('/employee/' + id).then(function(response) {
        getAllEmployees();
    });
  };

  $scope.makeEditable = function($index){
   if($scope.lastDataEditable != null)
      $scope.lastDataEditable = false;

   $scope.employees[$index].isEditable = true;
   $scope.lastDataEditable = $scope.employees[$index];
  }

  $scope.copy = function(id) {
    $http.get('/employee/' + id).then(function(response) {
      $scope.employee = response.data;
    });
  };


  $scope.employees=[
        [
        ]
    ];

$scope.dataTableOpt = {
  "LengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  "bAutoWidth": false,
  "pageLength": 10,
  "paging": false,
  "ordering": false,
  "searching": false,
  "bInfo" : false
  
  };

}]);



