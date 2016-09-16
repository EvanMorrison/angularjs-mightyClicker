var app = angular.module("MightyClickApp");

app.directive("whileDown", ['$document', '$parse', '$interval','$timeout', function($document, $parse, $interval, $timeout) {

	return {
		
		restrict: 'A',
			
		link: function(scope, element, attr) {
			var startX = 0, startY = 0, x = 0, y = 0;
			var intervalPromise = null;
			var intervalDelay = 15;
			var holdStarter  = null;
			var holdDelay = 500;
			var holdActive =false;
			element.css({
				position: 'relative',
				cursor: 'pointer'	
			}); 
			
			function bindEndAction() {
				// element.on('mouseup', endAction);
				$document.on('mouseup', endAction);
			}
			
			function unbindEndAction() {
				// element.off('mouseup', endAction);
				$document.off('mousemove', mousemove);
				$document.off('mouseup', endAction);
			}

			function beginAction(event) {
				//prevent default dragging of selected content
				event.preventDefault();
					// repeatingAction();
					scope.$apply($parse(attr.whilePressed));
					holdStarter = $timeout(function() {
						holdStarter = null;
						holdActive = true;
						element.text((element.text() === ("CLICK ME") ? "Drag Me" : element.text()));
						intervalPromise = $interval(repeatingAction, intervalDelay);
						$document.on('mousemove', mousemove);
					}, holdDelay);
					bindEndAction();

					startX = event.pageX - x;
					startY = event.pageY - y;

			}
			
			function endAction() {
				if (holdStarter) {
					$timeout.cancel(holdStarter);
					holdStarter = null;
				} else if (holdActive) {
					$interval.cancel(intervalPromise);
					element.text((element.text() === ("Drag Me") ? "CLICK ME" : element.text()));
					unbindEndAction();
					holdActive = false;
				}
			}			

			function repeatingAction() {
				var action = $parse(attr.whilePressed);
				action(scope);

			}

			element.on('mousedown', beginAction);

			function mousemove(event) {
				y = event.pageY - startY;
				x = event.pageX - startX;
				element.css({
					top: y + 'px',
					left: x + 'px'
				});
			}

		}
	}

}])