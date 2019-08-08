"use strict"

var app = angular.module("Server", ["ngRoute", "ngResource", "angularSoap"])

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/faseuno/", {
      templateUrl: "/view/home.html",
      controller: "HomeCtrl"
    })

    .otherwise({
      redirectTo: "/faseuno/"
    })
})

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true)
})
