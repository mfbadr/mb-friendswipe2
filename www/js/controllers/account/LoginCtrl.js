(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('LoginCtrl', ['$scope', 'OpenFB', '$state', function($scope, OpenFB, $state){

    $scope.facebookLogin = function(){
      OpenFB.login('public_profile,email,user_photos,read_stream,user_friends').then(
        function(){
          debugger;
        },
        function(){
          alert('OpenFB login failed');
        });
    };

  }]);
})();
