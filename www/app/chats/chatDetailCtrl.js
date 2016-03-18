;(function () {
	'use strict';

	angular
		.module('app.controllers')
		.controller('ChatDetailCtrl', ChatDetailCtrl);

	ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];

	function ChatDetailCtrl($scope, $stateParams, Chats) {
		$scope.chat = Chats.get($stateParams.chatId);
	}

})()
