(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('CardCtrl', ['$scope', 'TDCardDelegate', function($scope, TDCardDelegate){
    $scope.goAway = function(){
      var card = TDCardDelegate.getSwipebleCard($scope);
      card.swipe();
    };

    $scope.cardSwipedLeft = function(name){
      console.log('LEFT SWIPE on ', name);
      //$scope.addCard();
    };

    $scope.cardSwipedRight = function(name){
      console.log('RIGHT SWIPE on ', name);
      //$scope.addCard();
    };

    console.log('card ctrl');
  }]);
})();

