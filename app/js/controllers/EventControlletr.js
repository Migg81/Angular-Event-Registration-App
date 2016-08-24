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
            },
            Sessions:[
                {
                    Name:"Directive Angular JS",
                    CretaorName:"Sam M",
                    Duration:"1h 10m",
                    Lavel:"Advance",
                    Abstruction:"This Going Be truly amezing",
                    upVoteCountg:0
                },
                {
                    Name:"Scope fun ",
                    CretaorName:"Sam MZ",
                    Duration:"1h 10m",
                    Lavel:"Advance / O+",
                    Abstruction:"This Going Be amezing Bad",
                    upVoteCountg:0
                 },
                {
                    Name:"Directive to Learn Angular",
                    CretaorName:"Sam MZ",
                    Duration:"1h 10m",
                    Lavel:"Advance / O+",
                    Abstruction:"This Going Be amezing Bad",
                    upVoteCountg:0
                }
            ]
        }
    }
    app.controller('EventControlletr', EventControlletr);
}())