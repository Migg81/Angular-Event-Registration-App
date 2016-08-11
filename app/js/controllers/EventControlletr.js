(function(){
    var app = angular.module("eventsApp");

    var EventControlletr=function($scope){
        $scope.event={
            imgURL:"/img/angularjs-logo.png",
            name:"Angular event",
            date:"8/11/2016",
            time:"4.38pm",
            location:{
                address:"Mahaveer Rhythm",
                city:"Bangalore",
                provience:"Karnataka"
            }
        }
    }
    app.controller('EventControlletr', EventControlletr);
}())