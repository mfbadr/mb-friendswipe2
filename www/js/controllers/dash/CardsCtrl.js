(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('CardsCtrl', ['$scope', 'TDCardDelegate', function($scope, TDCardDelegate){
    //$scope.friend = Friends.get($state.params.friendId);
    //get as many details on friendship as possible, link to message from app
    console.log('CARDS CTRL');
    var cardTypes = [
      {title: 'Swipe down to clear the card', image: 'img/pic.png'},
      {title: 'Where is this?', image: 'img/pic.png'},
      {title: 'What kind of grass is this?', image: 'img/pic2.png'},
      {title: 'What beach is this?', image: 'img/pic3.png'},
      {title: 'What kind of clouds are these?', image: 'img/pic4.png'}
    ];

    $scope.cards = Array.prototype.slice.call(cardTypes, 0);

    console.log('Cards', $scope.cards);

    $scope.cardSwiped = function(index){
      $scope.addCard();
    };

    $scope.cardDestroyed = function(index){
      $scope.cards.splice(index, 1);
    };

    $scope.addCard = function(){
      var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      newCard.id = Math.random();
      $scope.cards.push(angular.extend({}, newCard));
    };

  }]);
})();
