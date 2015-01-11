(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('MatchDetailCtrl', ['$scope', '$state' , 'OpenFB', function($scope, $state, OpenFB){

    OpenFB.api({path:'/' + $state.params.friendId + '/picture?redirect=0&type=large'}).then(function(response){
      $scope.friendPicture = response.data.data.url;
    });

    OpenFB.api({path:'/' + $state.params.friendId}).then(function(response){
      $scope.friend = response.data;
    });

  }]);
})();
