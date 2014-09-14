'use strict';

app.controller('MainCtrl', function ($scope, ngDialog, $window) {

  	$scope.isCollapsed = true;

  	$scope.clickToOpen = function () {
    	ngDialog.open({ template: 'views/partials/navigation.html' });
	};

    // $window.alert('working');

});
