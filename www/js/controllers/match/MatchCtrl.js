(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('MatchCtrl', ['$scope', 'Match', '$rootScope', function($scope, Match, $rootScope){

    Match.matches($rootScope.myFacebookId).then(function(response){
      console.log('response from matches', response);
      $scope.matches = response.data;
    }, function(response){});

    //FOR TESTING
    /*
    Match.matches('1').then(function(response){
      console.log('response from matches', response);
      $scope.matches = response.data;
      //why is this returning double
    }, function(response){});
    */

    //
  }]);
})();

