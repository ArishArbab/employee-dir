angular.module('employee-dir').controller('employee-dir-view-controller',['$scope', 
	function($scope) { 
		$scope.about = false;
		$scope.contact = false;
		$scope.main = true;
		$scope.aboutus = function() {
			$scope.contact = false;
			$scope.main = false;
			$scope.about = true;
		}
		$scope.contactus = function() {
			$scope.about = false;
			$scope.main = false;
			$scope.contact = true;
		}
		$scope.home = function() {
			$scope.about = false;
			$scope.contact = false;
			$scope.main = true;
		}
	}
]);