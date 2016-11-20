var app = angular.module('gitApp', ['ngMaterial', 'ngRoute']);
app.controller('gitCtrl', function($scope){

});
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'home.html'
	})
	.when('/SettingUpARepository', {
		templateUrl:'repo.html'
	})
	.when('/SavingChanges', {
		templateUrl:'save.html'
	})
	.when('/InspectingARepository', {
		templateUrl:'inspect.html'
	})
	.when('/UndoingChanges', {
		templateUrl:'undochngs.html'
	})
	.when('/RewritingHistory', {
		templateUrl:'rewrite.html'
	})
	.otherwise({
        template: "'<br><br><br><br><br><h1 style='color:red;text-align:center'>404</h1><br><h2 style='color:red;text-align:center'>oops...something went wrong</h2><br><h3 style='color:green;text-align:center'>but don’t give up on us and try starting again...</h3><a href='#/' style='margin-left:35%;'>Go to home page</a>"
    });
});