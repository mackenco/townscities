// onclick handler for buttons
// when clicked replace span with answer-location-0 class's text with text of button that was clicked

//(function() {
// create reference to each section
var description = $('.description');
var selections = $('.selections');

$('.selections button').click(e => {
	// create reference to answer location span
	var answerLocation = description.find('.answer-location-0')[0];
	// create reference to current element text
	var currentElementText = e.target.innerText;
	// update answerLocation's text to be currentElementText
	answerLocation.innerText = currentElementText;
});

//})();
