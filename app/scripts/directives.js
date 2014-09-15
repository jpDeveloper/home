'use strict';

app.directive('scrolltotop', function($window){
	return{
		restrict: 'A',
		link: function (scope, element){
			// $($window).scroll(function () {
		 //        if ($(this).scrollTop() > 300) {
		 //            $('.back-top').fadeIn();
		 //        } else {
		 //            $('.back-top').fadeOut();
		 //        }
		 //    });

		    // // scroll body to 0px on click
		    // $('.back-top').click(function () {
		    //     $('body,html').animate({
		    //         scrollTop: 0
		    //     }, 1600);
		    //     return false;
		    // });

		}
	}
});

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

app.directive('latestWorks', function(){
	return{
		restrict: 'A',
		link: function(scope, element){
			var colours = [
				'#88bec1','#a7c817','#f1655f', '#f2a057'

			];

			var boxColor = element.find('.latest-box');
			var number = 0;

			element.on('mouseover', function(){
				element.css('cursor', 'pointer');
			});

			element.on('click', function(){

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
			element.on('mouseover', function(){
				element.css('cursor', 'pointer');
			});

			$interval(function(){
				element.toggleClass('colour-photo');
			}, 9000);

		}
	}
});
