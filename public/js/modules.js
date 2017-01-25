app.controller('landingPageCtrl', ['$scope', function ($scope, $rootScope, $location) {
    $scope.test = "gg";
}]);
app.service('Modules', function(){
    var data = [];
    data.main = [
        {
            id: 0,
            title: 'Inventory',
            secondTitle: null,
            url: 'inventory',
            icon: 'fa fa-address-book'
        },
        {
            id: 1,
            title: 'Customers',
            secondTitle: null,
            url: 'customers',
            icon: 'fa fa-address-book'
        }
        ,
        {
            id: 2,
            title: 'Projects',
            secondTitle: null,
            url: 'projects',
            icon: 'fa fa-address-book'
        }
        ,
        {
            id: 3,
            title: 'Suppliers',
            secondTitle: null,
            url: 'suppliers',
            icon: 'fa fa-address-book'
        },
        {
            id: 4,
            title: 'Finances',
            secondTitle: null,
            url: 'finances',
            icon: 'fa fa-address-book'
        },
        {
            id: 4,
            title: 'Showcase',
            secondTitle: null,
            url: 'showcase',
            icon: 'fa fa-address-book'
        }
        ];
    data.administration = [
        {
            id: 0,
            title: 'Users',
            secondTitle: null,
            url: 'users',
            icon: 'fa fa-address-book'
        },
        {
            id: 1,
            title: 'Settings',
            secondTitle: null,
            url: 'settings',
            icon: 'fa fa-address-book'
        },
        {
            id: 2,
            title: 'Permissions',
            secondTitle: null,
            url: 'permissions',
            icon: 'fa fa-address-book'
        },
        {
            id: 3,
            title: 'Logs',
            secondTitle: null,
            url: 'logs',
            icon: 'fa fa-address-book'
        },
        {
            id: 4,
            title: 'Databases',
            secondTitle: null,
            url: 'databases',
            icon: 'fa fa-address-book'
        },
        {
            id: 5,
            title: 'User Preferences',
            secondTitle: null,
            url: 'user_preferences',
            icon: 'fa fa-address-book'
        },
        {
            id: 6,
            title: 'Administration Profile',
            secondTitle: null,
            url: 'administration_profile',
            icon: 'fa fa-address-book'
        }
        ];
    return data;
});