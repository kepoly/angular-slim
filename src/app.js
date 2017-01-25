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
            .when('/inventory', {
                title: 'Home',
                controller: 'inventoryCtrl',
                templateUrl: '../templates/inventory/inventory.php'
            })
            .when('/customers', {
                title: 'Home',
                controller: 'customersCtrl',
                templateUrl: '../templates/customers/customers.php'
            })
            .when('/projects', {
                title: 'Home',
                controller: 'projectsCtrl',
                templateUrl: '../templates/projects/projects.php'
            })
            .when('/suppliers', {
                title: 'Home',
                controller: 'suppliersCtrl',
                templateUrl: '../templates/suppliers/suppliers.php'
            })
            .when('/finances', {
                title: 'Home',
                controller: 'financesCtrl',
                templateUrl: '../templates/finances/finances.php'
            })
            .when('/showcase', {
                title: 'Home',
                controller: 'showcaseCtrl',
                templateUrl: '../templates/showcase/showcase.php'
            })
            .when('/users', {
                title: 'Home',
                controller: 'usersCtrl',
                templateUrl: '../templates/users/users.php'
            })
            .when('/settings', {
                title: 'Home',
                controller: 'settingsCtrl',
                templateUrl: '../templates/settings/settings.php'
            })
            .when('/permissions', {
                title: 'Home',
                controller: 'permissionsCtrl',
                templateUrl: '../templates/permissions/permissions.php'
            })
            .when('/logs', {
                title: 'Home',
                controller: 'logsCtrl',
                templateUrl: '../templates/logs/logs.php'
            })
            .when('/databases', {
                title: 'Home',
                controller: 'databasesCtrl',
                templateUrl: '../templates/databases/databases.php'
            })
            .when('/user-preferences', {
                title: 'Home',
                controller: 'userPreferencesCtrl',
                templateUrl: '../templates/user-preferences/user-preferences.php'
            })
            .when('/administration-profile', {
                title: 'Home',
                controller: 'administrationProfileCtrl',
                templateUrl: '../templates/administration-profile/administration-profile.php'
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