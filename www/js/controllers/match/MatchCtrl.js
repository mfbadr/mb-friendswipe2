/* jshint camelcase:false*/


(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('MatchCtrl', ['$scope', 'Match', '$rootScope', 'OpenFB', function($scope, Match, $rootScope, OpenFB){

    console.log('matches is ', $scope.matches);
    Match.matches($rootScope.myFacebookId).then(function(response){
      console.log('response from matches', response);
      $scope.matches = friendPictures(response.data);

    }, function(response){});

    function friendPictures(matchArray){
      matchArray = matchArray.map(function(match){
        var url;
        OpenFB.api({path:'/' + match.sender_id + '/picture?redirect=0&type=large'}).then(function(data){
          url = data.data.data.url;
          match.url = url;
        });
        return match;
      });
      return matchArray;
    }

  }]);
})();

