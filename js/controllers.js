var myControllers = angular.module('myControllers', []);

/*myControllers.controller('PhoneListCtrl', [$scope, $http, function($scope, $http) {
    /*$scope.phones = [
        {"name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S.","age": 0},
        {"name": "Motorola XOOM™ with Wi-Fi",
            "snippet": "The Next, Next Generation tablet.","age": 1},
        {"name": "MOTOROLA XOOM™",
            "snippet": "The Next, Next Generation tablet.","age": 2}
    ];*//*
      $http.get('newjson.json').success(function(response) {
    $scope.phones = response;
  });
 
  $scope.orderProp = 'age';
}]);

myControllers.controller('PhoneDetailCtrl', [$scope, $routeParam, function($scope, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}]);*/

myControllers.controller('HomeCtrl', ['$scope', function($scope) {
        $scope.pageHeader = "Home";
}]);

myControllers.controller('EducationCtrl', ['$scope', function($scope) {
        $scope.pageHeader = "Education";
}]);

myControllers.controller('SkillsCtrl', ['$scope', function($scope) {
        $scope.pageHeader = "Skills";
}]);

myControllers.controller('JobCtrl', ['$scope', function($scope) {
        $scope.pageHeader = "Job";
}]);

myControllers.controller('ContactsCtrl', ['$scope', function($scope) {
        $scope.pageHeader = "Contacts";
}]);

myControllers.controller('404Ctrl', ['$scope', function($scope) {
        $scope.pageHeader = "404";
}]);