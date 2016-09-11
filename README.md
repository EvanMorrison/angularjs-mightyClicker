# angularjs-mightyClicker

UPDATE: added a custom Directive to handle click vs hold-down mouse events.
The difficulty is that 'mousedown' and 'mouseup' events both trigger before a 'click' event, so an onMouseup() used to stop the onMousedown() function will also prevent the click event. So the challenge was to have an event
occur one time immediately on mousedown, and then begin repeating after 
a half-second delay (along with making the element draggable just for 
kicks). The repeating action is cancelled by mouseup, but mouseup must not
prevent the initial click action.

 
****


V School 8 September, 2016 
Exercise, Angular Web Applications, Level 2, Programming Principles Level 1

A website that:

Has two buttons on the screen, one red and one blue.
Above or below the button is some text with a "score" in it. 
Each of these scores start at 100. When the user clicks the red button, 
the score above red increases by one and the score above blue decreases by one. 
The opposite happens if they click the blue button.
When either label reaches 0 it automatically resets to 100.

The point of the exercise is to implemnent this using two Angularjs services. 
One called BlueService and one called RedService. Each service will store the 
counter that displays above/below the buttons as a property on the service. 
Each service will have at least 3 methods: increment, decrement, and reset, which 
resets the counter to 100.
The counter property in the services is NOT directly manipulated by the controller
 - there are public methods in the services to perform the operations instead, which 
 are called by the controller.
 
