app.controller('MainController', ['$scope', '$location', 'translationService',
    function ($scope, $location, translationService) {
        $scope.setCurrentLanguage = function (language) {
            if (language === 'en') {
                $scope.currentLanguage = 'en';
                $scope.currentLanguageFullName = 'Eng';
            } else if (language === 'ru') {
                $scope.currentLanguage = 'ru';
                $scope.currentLanguageFullName = 'Rus';
            }
            $scope.translate();
        };
        
        $scope.translate = function () {
            translationService.getTranslation($scope, $location.path(), $scope.currentLanguage);
        };
    }]);

var myControllers = angular.module('myControllers', []);

myControllers.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

myControllers.controller('EducationCtrl', ['$scope', function ($scope) {

}]);

myControllers.controller('SkillsCtrl', ['$scope', function($scope) {

}]);

myControllers.controller('JobCtrl', ['$scope', function($scope) {

}]);

myControllers.controller('ContactsCtrl', ['$scope', function($scope) {

}]);

myControllers.controller('404Ctrl', ['$scope', function($scope) {

}]);