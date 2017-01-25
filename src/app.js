var app = angular.module('template', ['ngRoute', 'ui.bootstrap']);

app.value('baseUrlPath', 'angular_slim/');


app.run(function ($rootScope, $http, $location, $window, $interval, $timeout) {
    $rootScope.LocationGo = function(path) {
        $location.path(path);
    }
});

app.controller('dashboardCtrl', function ($scope, Modules) {
    $scope.pageTitle = 'Dashboard';
    $scope.modules = Modules;
});

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
                title: 'Home',
                controller: 'landingPageCtrl',
            templateUrl: '../templates/home.php'
        })
            .when('/home', {
                title: 'Home',
                controller: 'landingPageCtrl',
                templateUrl: '../templates/home.php'
            })
            .when('/login', {
                title: 'Home',
                controller: 'landingPageCtrl',
                templateUrl: '../templates/auth/login.php'
            })
            .when('/dashboard', {
                title: 'Home',
                controller: 'dashboardCtrl',
                templateUrl: '../templates/dashboard/dashboard.php'
            })
            .when('/users', {
                title: 'Home',
                controller: 'usersCtrl',
                templateUrl: '../templates/users/users.php'
            })
            .when('/profile/:userName', {
                title: 'Profile',
                controller: 'profilePageCtrl',
                resolve: {
                    usersData: function (userservice, $route) {
                        var userData = $route.current.params.userName;
                        return userservice.returnUsersData(userData);
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode(true);
        }
    }
]);

//mainly to cancel any promises.
app.run(['$rootScope', '$interval', function($rootScope, $interval) {

}]);