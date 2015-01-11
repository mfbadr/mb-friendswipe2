(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('CardsCtrl', ['$scope', 'TDCardDelegate', 'OpenFB', '$rootScope', 'Dash', function($scope, TDCardDelegate, OpenFB, $rootScope, Dash){

    OpenFB.api({path:'/me'}).then(function(data){
      $rootScope.myFacebookId = data.data.id;

      Dash.getSwipes($rootScope.myFacebookId).then(function(response){
        console.log('RESPONSE FROM /GETSWIPES', response);
        var swiped = response.data;
        //
        OpenFB.api({path:'/me/friends'}).then(function(data){
          var rawFriends = data.data.data;
          console.log('rawFriends :', rawFriends);
          //cross rawfriends with swiped here, then pass to friendPictures
          swiped.forEach(function(target){
            rawFriends = _.reject(rawFriends, function(friend){
              return friend.id === target.target;
            });
          });
          $scope.cards = friendPictures(rawFriends);
        });
        //
      });

    }, function(data){
      console.log('something went wrong getting user info', data);
    });

    //get current users friends

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
