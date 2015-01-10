(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('AccountCtrl', ['$scope', 'OpenFB', '$state', function($scope, OpenFB, $state){

    $scope.logout = function(){
      OpenFB.logout();
      $state.go('login');
    };

  }]);
})();
