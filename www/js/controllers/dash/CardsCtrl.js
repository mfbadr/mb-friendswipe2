(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('CardsCtrl', ['$scope', 'TDCardDelegate', 'OpenFB', '$rootScope', function($scope, TDCardDelegate, OpenFB, $rootScope){
    //$scope.friend = Friends.get($state.params.friendId);
    //get as many details on friendship as possible, link to message from app
    console.log('CARDS CTRL');
    var cardTypes;
/*
    var cardTypes = [
      {title: 'Swipe down to clear the card', image: 'img/pic.png'},
      {title: 'Where is this?', image: 'img/pic.png'},
      {title: 'What kind of grass is this?', image: 'img/pic2.png'},
      {title: 'What beach is this?', image: 'img/pic3.png'},
      {title: 'What kind of clouds are these?', image: 'img/pic4.png'}
    ];
*/
//

    OpenFB.api({path:'/me'}).then(function(data){
      console.log('ALL THE DATA!  - ', data);
      console.log('MY ID IS', data.data.id);
      $rootScope.myFacebookId = data.data.id;
    }, function(data){
      console.log(data);
    });
    //
    OpenFB.api({path:'/me/picture?redirect=0&type=large'}).then(function(data){
      console.log('/me/picture', data);
    });

    //get current users friends
    OpenFB.api({path:'/me/friends'}).then(function(data){
      console.log('/me/friends', data);
      $scope.friends = data.data;
      cardTypes = data.data.data;
      console.log('cardTypes is ', cardTypes);
      $scope.cards = Array.prototype.slice.call(cardTypes, 0);
      $scope.digest();
    });
//
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
