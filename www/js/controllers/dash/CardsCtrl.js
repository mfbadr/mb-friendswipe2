(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('CardsCtrl', ['$scope', 'TDCardDelegate', 'OpenFB', '$rootScope', function($scope, TDCardDelegate, OpenFB, $rootScope){

    OpenFB.api({path:'/me'}).then(function(data){
      $rootScope.myFacebookId = data.data.id;
    }, function(data){
      console.log('something went wrong getting user info', data);
    });


    //get current users friends
    OpenFB.api({path:'/me/friends'}).then(function(data){
      var rawFriends = data.data.data;
      $scope.cards = friendPictures(rawFriends);
    });

    $scope.cardDestroyed = function(index){
      $scope.cards.splice(index, 1);
      console.log('cards.length is :', $scope.cards.length);
    };

    function friendPictures(friendsArray){
      friendsArray = friendsArray.map(function(friend){
        var url;
        OpenFB.api({path:'/' + friend.id + '/picture?redirect=0&type=large'}).then(function(data){
          url = data.data.data.url;
          console.log('url for', friend.name, 'is',  url);
          friend.url = url;
        });
        return friend;
      });
      return friendsArray;
    }

  }]);
})();
