angular.module('employee-dir').directive('header', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "modules/views/header.html",
        controller: "employee-dir-view-controller"
    }
});

angular.module('employee-dir').directive('footer', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "modules/views/footer.html"
    }
});

angular.module('employee-dir').directive('about', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "modules/employee-dir/views/app.client.view.about.html"
    }
});

angular.module('employee-dir').directive('contact', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "modules/employee-dir/views/app.client.view.contact.html"
    }
});

angular.module('employee-dir').directive('main', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "modules/employee-dir/views/app.client.view.main.html"
    }
});

angular.module('employee-dir').directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'yy-mm-dd',
                changeMonth:true,
                changeYear:true,
                maxDate:"-1M -1D -1Y",
                onSelect: function (date) {
                    scope.employee.dob = date;
                    scope.$apply();
                }
            });
        }
    };
});


angular.module('employee-dir').directive('jqdatepickereditable', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'yy-mm-dd',
                changeMonth:true,
                changeYear:true,
                maxDate:"-1M -1D -1Y",
                onSelect: function (date) {
                    scope.e.dob = date;
                    scope.$apply();
                }
            });
        }
    };
});