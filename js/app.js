  var app = angular.module('myApp', ['ngRoute','myControllers']);
  app.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
        when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'}).
        when('/home', {
          templateUrl: 'views/home.html', 
          controller: 'HomeCtrl'
        }).
        when('/education', {
          templateUrl: 'views/education.html', 
          controller: 'EducationCtrl'
        }).
        when('/skills', {
          templateUrl: 'views/skills.html', 
          controller: 'SkillsCtrl'
        }).
        when('/job', {
          templateUrl: 'views/job.html', 
          controller: 'JobCtrl'
        }).
        when('/contacts', {
          templateUrl: 'views/contacts.html', 
          controller: 'ContactsCtrl'
        }).
        when('/404', {
          templateUrl: 'views/404.html', 
          controller: '404Ctrl'
        }).
        otherwise({
          redirectTo: '/404'
        });
  }]);
