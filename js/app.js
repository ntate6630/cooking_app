
/*angular.module('cookingApp', ['ngRoute', 'angular-storage', 'RouteControllers', 'UserService']);*/
angular.module('cookingApp', ['ngRoute', 'angular-storage', 'RouteControllers']);

angular.module('cookingApp').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	})
	.when('/test', {
		templateUrl: 'templates/test.html',
		controller: 'TestController'
	})
	.when('/accounts/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	})
	.when('/accounts/logout', {
		templateUrl: 'templates/logout.html',
		controller: 'LogoutController'
	})
	.when('/recipes', {
		templateUrl: 'templates/recipes.html',
		controller: 'RecipesController',
	})
	.when('/howTo', {
		templateUrl: 'templates/howto.html',
		controller: 'HowToController',
	})
	.when('/video', {
		templateUrl: 'templates/video.html',
		controller: 'VideoController',
	})
	.when('/shop', {
		templateUrl: 'templates/shop.html',
		controller: 'ShopController',
	});
});
