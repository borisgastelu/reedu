;(function () {
	'use strict';

	angular
		.module('app')
		.config(function ($stateProvider, $urlRouterProvider) {
			// Ionic uses AngularUI Router which uses the concept of states
			// https://github.com/angular-ui/ui-router
			$stateProvider
				// setup an abstract state for the tabs directive
				.state('tab', {
					url: '/tab',
					abstract: true,
					templateUrl: 'app/layout/tabs.html'
				})

					// Each tab has its own nav history stack:
					.state('tab.chats', {
						url: '/chats',
						views: {
							'tab-chats': {
								templateUrl: 'app/chats/tab-chats.html',
								controller: 'ChatsCtrl'
							}
						}
					})

						.state('tab.chat-detail', {
							url: '/chats/:chatId',
							views: {
								'tab-chats': {
									templateUrl: 'app/chats/chat-detail.html',
									controller: 'ChatDetailCtrl'
								}
							}
						})

					.state('tab.map', {
						url: '/map',
						views: {
							'tab-map': {
								templateUrl: 'app/map/tab-map.html',
								controller: 'MapCtrl'
							}
						}
					})

					.state('tab.pre-qualify', {
						url: '/pre-qualify',
						views: {
							'tab-pre-qualify': {
								templateUrl: 'app/pre-qualify/tab-pre-qualify.html',
								controller: 'PreQualifyCtrl'
							}
						}
					})

					.state('tab.account', {
						url: '/account',
						views: {
							'tab-account': {
								templateUrl: 'app/account/tab-account.html',
								controller: 'AccountCtrl'
							}
						}
					});

			// if none of the above states are matched, use this as the fallback
			$urlRouterProvider.otherwise('/tab/map');

		});

})()
