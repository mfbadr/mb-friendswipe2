(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('LoginCtrl', ['$scope', 'OpenFB', function($scope, OpenFB){

    $scope.facebookLogin = function(){
      OpenFB.login('public_profile,email,user_photos,read_stream,user_friends').then(
        function(){
          $location.path('/menu');
        },
        function(){
          alert('OpenFB login failed');
        });
    };

  }]);
})();
