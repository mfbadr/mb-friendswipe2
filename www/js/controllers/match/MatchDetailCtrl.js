(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('MatchDetailCtrl', ['$scope', '$state' , 'Friends', function($scope, $state, Friends){
    $scope.friend = Friends.get($state.params.friendId);
  }]);
})();
