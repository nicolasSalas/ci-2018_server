'use strict';

var app = angular.module('Visor');

app.controller('HomeCtrl', function ($scope, MyServices, $log) {

  $scope.yourName;
  $scope.ver = false;

  $scope.click = function (e) {

    if (e == null) {
      $scope.yourName = 'Desconocido';
      $log.error('Sin nombre no hay app')

    } else if (e == 'saltala'){

      $scope.ver = true;
      $scope.yourName = null;

    } else if (e == 'WS1') {

      $log.info('Conexion a WS1')

    } else if (e == 'WS2') {

      $log.info('Conexion a WS2')

    }  else {
      $log.info("Bienvenido al generdor disparado desde AWS");
    }

  }

});
