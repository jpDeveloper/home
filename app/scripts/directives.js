'use strict';

app.directive('elements', function($timeout){
	return{
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs){

			var text = element.find('.aboutBox');
			var image = element.find('.travel-img');

			element.on('mouseover', function(){
				element.css('cursor', 'pointer');
			});

			element.on('click', function(){
				image.fadeOut('slow', function(){
					text.fadeIn('slow');
				});

				$timeout(function(){
					text.fadeOut('slow', function(){
						image.fadeIn('slow');
					});
				}, 7000);
			});
		}
	};
});
