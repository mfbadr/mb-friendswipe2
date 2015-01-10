(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('CardCtrl', ['$scope', 'TDCardDelegate', 'Dash', '$rootScope', function($scope, TDCardDelegate, Dash, $rootScope){
    $scope.goAway = function(){
      var card = TDCardDelegate.getSwipebleCard($scope);
      card.swipe();
      console.log('$scope.goAway');
    };

    $scope.cardSwipedLeft = function(target){
      console.log('LEFT SWIPE on ', target);
      var swipeObj = {sender : $rootScope.myFacebookId,
                      target : target,
                      liked : false
                     };
      Dash.swipe(swipeObj).then(function(response){
        console.log('added left swipe on', target);
      },function(){
        console.log('something went wrong adding a new swipe :(');
      });
      //$scope.addCard();
    };

    $scope.cardSwipedRight = function(target){
      console.log('RIGHT SWIPE on ', target);
      var swipeObj = {sender : $rootScope.myFacebookId,
                      target : target,
                      liked : true
                     };
      Dash.swipe(swipeObj).then(function(response){
        console.log('added right swipe on', target);
      },function(){
        console.log('something went wrong adding a new swipe :(');
      });
      //$scope.addCard();
    };



    console.log('card ctrl');
  }]);
})();

