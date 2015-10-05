app.service('translationService', function ($http) {
    this.getTranslation = function ($scope, page, language) {
        if(page === "/") page = "/home";
        var languageFilePath = 'models' + page + '_' + language + '.json';
        $http.get(languageFilePath).success(function (response) {
            $scope.translation = response;
        });
        var menuFilePath = 'models/menu_' + language + '.json';
        $http.get(menuFilePath).success(function (response) {
            $scope.menu = response;
        });
    };
});