(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('CardsCtrl', ['$scope', 'TDCardDelegate', 'OpenFB', '$rootScope', function($scope, TDCardDelegate, OpenFB, $rootScope){
    //$scope.friend = Friends.get($state.params.friendId);
    //get as many details on friendship as possible, link to message from app
    console.log('CARDS CTRL');
//

    OpenFB.api({path:'/me'}).then(function(data){
      //console.log('ALL THE DATA!  - ', data);
      //console.log('MY ID IS', data.data.id);
      $rootScope.myFacebookId = data.data.id;
    }, function(data){
      //console.log(data);
    });

    OpenFB.api({path:'/me/picture?redirect=0&type=large'}).then(function(data){
      console.log('/me/picture', data);
    });

    //get current users friends
    OpenFB.api({path:'/me/friends'}).then(function(data){
      console.log('/me/friends', data);
      //$scope.friends = data.data;
      console.log('RAW FRIENDS ARRAY', data.data.data);
      var rawFriends = data.data.data;
      $scope.cards = friendPictures(rawFriends);
      console.log('PROCESSED FRIENDS ARRAY', $scope.cards);
      //$scope.digest();
    });

    $scope.cardDestroyed = function(index){
      $scope.cards.splice(index, 1);
      console.log('cards.length is :', $scope.cards.length);
    };

    function friendPictures(friendsArray){
      friendsArray = friendsArray.map(function(friend){
        var url;
        OpenFB.api({path:'/' + friend.id + '/picture?redirect=0&type=large'}).then(function(data){
          //console.log('raw data from friendPictures', data);
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
