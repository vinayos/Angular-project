var app = angular.module("myApp", ["ngRoute"]).config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'partials/home.html'
    })
    .when('/Anantha',{
        templateUrl : 'partials/Anantha.html'
    })
    .when('/Basavaraj',{
        templateUrl : 'partials/basavaraj.html'
    })
    .when('/Jaisheel',{
        templateUrl : 'partials/jaisheel.html'
    })
    .when('/Neeraj',{
        templateUrl : 'partials/neeraj.html'
    })
    .when('/Panduranga',{
        templateUrl : 'partials/panduranga.html'
    })
    .when('/Prasad',{
        templateUrl : 'partials/Prasad.html'
    })
    .when('/Ravi',{
        templateUrl : 'partials/ravi.html'
    })
    .when('/Registration',{
        templateUrl : 'partials/registration.html'
    })
    .when('/Sathish',{
        templateUrl : 'partials/sathish.html'
    })
    .when('/Srinivas',{
        templateUrl : 'partials/srinivas.html'
    });
});