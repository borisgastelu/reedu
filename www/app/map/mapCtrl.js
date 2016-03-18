;(function () {
	'use strict';

	angular
		.module('app.controllers')
		.controller('MapCtrl', MapCtrl);

	MapCtrl.$inject = ['$scope', '$stateParams'];

	function MapCtrl($scope, $stateParams) {
		// $scope.locationId = Number($stateParams.id);

		$scope.map = {
			center: {
				latitude: 38.897677,
				longitude: -77.036530
			},
			zoom: 12
		};
		$scope.options = {
			scrollwheel: false
		};

		// This should come as a result from a function
		$scope.marker = {
			id: 0,
			coords: {
				latitude: 38.897677,
				longitude: -77.036530
			},
			title: 'Some point<br/>(Tap for directions)',
			showWindow: true
		};
		
		$scope.marker.options = {
			draggable: false,
			labelContent: 'Marker 0',
			labelAnchor: "80 120",
			labelClass: "marker-labels"
		};
	}

})()
