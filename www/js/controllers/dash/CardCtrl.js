(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('CardCtrl', ['$scope', 'TDCardDelegate', function($scope, TDCardDelegate){
    $scope.goAway = function(){
      var card = TDCardDelegate.getSwipebleCard($scope);
      card.swipe();
    };

    console.log('card ctrl');
  }]);
})();

