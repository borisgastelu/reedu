;(function () {
	'use strict';

	angular
		.module('app')
		.controller('SidemenuCtrl', SidemenuCtrl);

	SidemenuCtrl.$inject = ['$scope', '$ionicSideMenuDelegate'];

	function SidemenuCtrl($scope, $ionicSideMenuDelegate) {
		$scope.leftMenu = function () {
			$ionicSideMenuDelegate.toggleLeft();
		};
		$scope.rightMenu = function () {
			$ionicSideMenuDelegate.toggleRight();
		};
	}

})()
