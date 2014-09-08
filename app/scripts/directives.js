'use strict';

app.directive('elements', function($timeout){
	return{
		restrict: 'A',
		scope: false,
		link: function(scope, element){

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

app.directive('wrapOwlcarousel', function () {  
    return {  
        restrict: 'E',  
        link: function (scope, element, attrs) {  
            var options = scope.$eval($(element).attr('data-options'));  
            $(element).owlCarousel(options);  
        }  
    };  
});  

app.directive('latestWorks', function(){
	return{
		restrict: 'A',
		link: function(scope, element){
			var colours = [
				'#6c88b9','#72d2a5','#f88890', '#f49662'
			
			];

			var boxColor = element.find('.latest-box');
			var number = 0;

			element.on('mouseover', function(){
				element.css('cursor', 'pointer');
			});

			element.on('click', function(){
				console.log('click');

				boxColor.css('background-color', colours[number]);

				number += 1;

				if(number > 3){
						number = 0;
				}
				

				console.log(number);

			});

		}
	}
});	

app.directive('jesusParlange', function($timeout, $interval){
	return{
		restrict: 'A',
		link: function(scope, element){

			$interval(function(){
				element.toggleClass('colour-photo');
			}, 9000);

		}
	}
});
