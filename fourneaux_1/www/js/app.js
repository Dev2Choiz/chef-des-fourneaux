// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

urlWebService="http://localhost/webservice/public/index.php";
urlImg="../../img/";



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

var application = angular.module('application', ['ionic', 'ngTouch'])

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


application.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl : 'partials/login.html',
            controller : 'UserController',
        })
        .state('home', {
            url: '/home',
            templateUrl : 'partials/home.html',
            controller : 'HomeController',
        })
        .state('position', {
            url: '/position',
            templateUrl : 'partials/position.html',
            controller : 'PositionController',
        })
        .state('recetteAll', {
            url: '/recetteAll',
            templateUrl : 'partials/recetteAll.html',
            controller : 'RecetteAllController',
        })
        .state('categorierecette', {
            url: '/categorierecette',
            templateUrl : 'partials/categorierecette.html',
            controller : 'CategorieRecetteController',
        })
        .state('todolist', {
            url: '/todolist',
            templateUrl : 'partials/todolist.html',
            controller : 'TodoListController',
        });

    $urlRouterProvider
        .otherwise('/login');
}]);
