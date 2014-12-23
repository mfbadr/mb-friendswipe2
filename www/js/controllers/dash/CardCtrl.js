(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('CardCtrl', ['$scope', 'TDCardDelegate', function($scope, TDCardDelegate){
    $scope.goAway = function(){
      var card = TDCardDelegate.getSwipebleCard($scope);
      card.swipe();
    };

    $scope.onSwipeLeft = function(index){
      console.log('LEFT SWIPE');
      $scope.addCard();
    };
    $scope.onSwipeRight = function(index){
      console.log('RIGHT SWIPE');
      $scope.addCard();
    };

    console.log('card ctrl');
  }]);
})();

