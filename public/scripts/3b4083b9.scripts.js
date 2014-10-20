(function(){"use strict";angular.module("frontApp",["ngSanitize","ngRoute"]).config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]).config(["$httpProvider",function(a){return a.defaults.transformRequest=function(a){return void 0===a?a:$.param(a)},a.defaults.headers.post={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}])}).call(this),function(){"use strict";angular.module("frontApp").controller("MainCtrl",["$scope","Api",function(a,b){var c;return c=function(){return a.new_name="",a.new_age="",a.new_memo=""},c(),b.getPeople().then(function(b){return a.results=b.data}),a.doPost=function(){var d;return d={"person[name]":a.new_name,"person[age]":a.new_age,"person[memo]":a.new_memo},b.postPeople(d).then(function(b){return a.results.push(b.data),c()})},a.doDelete=function(c){return b.deletePeople(a.results[c].id).then(function(){return a.results.splice(c,1)})}}])}.call(this),function(){"use strict";angular.module("frontApp").factory("Api",["$http",function(a){var b;return b="",{getPeople:function(){return a.get(b+"/people").success(function(){})},postPeople:function(c){return a.post(b+"/people.json",c).success(function(){})},deletePeople:function(c){return a["delete"](b+"/people/"+c+".json").success(function(){})}}}])}.call(this);