'use strict';

app.controller('MainCtrl', function ($scope, ngDialog) {

 	$scope.isCollapsed = true;

 	$scope.clickToOpen = function () {
    	ngDialog.open({ template: 'views/partials/navigation.html' });
	};

});	