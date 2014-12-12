(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('MatchCtrl', ['$scope', 'Friends', function($scope, Friends){
    $scope.friends = Friends.all();
  }]);
})();
