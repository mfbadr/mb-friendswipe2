(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('MatchCtrl', ['$scope', 'Match', '$rootScope', function($scope, Match, $rootScope){

    //Match.matches($rootScope.myFacebookId).then(function(response){
      //console.log('response from matches', response);
    //}, function(reseponse){});

    //FOR TESTING
    Match.matches('1').then(function(response){
      console.log('response from matches', response);
      //why is this returning double
    }, function(reseponse){});

    //make a call to the database to find all friends who match
    //
  }]);
})();

