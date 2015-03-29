// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

urlWebService="http://localhost/webservice/public/index.php";
urlImg="..";



var app = {
    // Application Constructor
    initialize: function() {
        console.log("initialize");
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        console.log("bindEvents");
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("onDeviceReady");
    },

};



app.initialize();

var application = angular.module('application', ['ionic','ngRoute', 'ngTouch'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

application.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl : 'partials/home.html',
            controller : 'HomeController'
        })
        .when('/position', {
            templateUrl : 'partials/position.html',
            controller : 'PositionController'
        })
        .when('/login', {
            templateUrl : 'partials/login.html',
            controller : 'UserController'
        })
        .when('/recettes', {
            templateUrl : 'partials/recettes.html',
            controller : 'RecetteAllController'
        })
        .when('/categorierecette', {
            templateUrl : 'partials/categorierecette.html',
            controller : 'CategorieRecetteController'
        })
        .when('/todolist', {
            templateUrl : 'partials/todolist.html',
            controller : 'TodoListController'
        })
        .otherwise({
            redirectTo : '/home'
        });

        // Ici, on définit les différentes pages et on les associent 
        // à leur controller
});
