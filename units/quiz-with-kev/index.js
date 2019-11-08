// onclick handler for buttons
// when clicked replace span with answer-location-0 class's text with text of button that was clicked

// declare variabke for already selected quizzes

(function() {
	// create reference to each section
	var description = $('.description');
	var selections = $('.selections');
	var currentQuizIndex = 0;

	// populate quizzes
	// select buttons and populate them with quiz options
	let inputButtons = selections.find('button');
	console.log(inputButtons);
	// iterate over inputButtons and for each button add text porperty based on obj

	populateQuiz = (quizIndex = currentQuizIndex) => {
		let quiz = quizzes[quizIndex];

		quiz.forEach((quizAnswer, index) => {
			console.log(quizAnswer['answer' + index]);
			var inputButton = inputButtons[index];
			if (quizAnswer.hasOwnProperty('correctAnswer')) {
				$(inputButton).attr('data-answer', '0');
				$(inputButton).text(quizAnswer['correctAnswer']);
			} else {
				$(inputButton).text(quizAnswer['answer' + index]);
			}
		});
		description.find('p.sentence').html(quiz[4]['sentence']);
	};

	populateQuiz(currentQuizIndex);

	// select sentence and populate with the sentence from the object
	// description.find('p.sentence').html(quiz1[4]['sentence']);

	$('.selections button').click(e => {
		// create reference to answer location span
		var answerLocation = description.find('.answer-location-0')[0];
		// create reference to current element text
		var currentElementText = e.target.innerText;
		// update answerLocation's text to be currentElementText
		answerLocation.innerText = currentElementText;
		// check if correct or incorrect class exists
		// if so run validation code from click handler below
		console.log('checking for class', description.find('p.sentence').hasClass('correct'));
		if (description.find('p.sentence').hasClass('correct') || description.find('p.sentence').hasClass('incorrect')) {
			highlightSentenceCorrectOrNot();
		}
	});

	$('.submit').click(e => {
		highlightSentenceCorrectOrNot();
	});

	highlightSentenceCorrectOrNot = () => {
		// grab the correct anser and store it in a variable
		let correctAnswerText = selections.find('[data-answer="0"]').text();
		console.log(correctAnswerText);
		// check if the selected answer is the right answer
		// grab current selection and save it to a variable
		let currentSelection = $('.answer-location-0').text();
		console.log(currentSelection);
		if (currentSelection === correctAnswerText) {
			$('.sentence').addClass('correct');
			$('.sentence').removeClass('incorrect');
		} else {
			$('.sentence').addClass('incorrect');
			$('.sentence').removeClass('correct');
		}
	};

	resetQuiz = () => {
		$('.sentence').removeClass('correct');
		$('.sentence').removeClass('incorrect');
	};

	// current issues:
	// Also how do I move to the next quiz

	$('button.next').click(e => {
		// reset quiz color highlighting
		resetQuiz();
		// invoke populate quiz with the next quic
		if (currentQuizIndex < quizzes.length) {
			currentQuizIndex++;
			populateQuiz(currentQuizIndex);
		}
	});
})();
