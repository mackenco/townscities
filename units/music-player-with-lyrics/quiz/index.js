const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

addImage = (path, DOMelement) => {
	var img = document.createElement('img');
	img.src = path;
	document.querySelector('body').appendChild(img);
	return '';
};

const myQuestions = [
	{
		question: 'Yesterday I',
		answers: {
			a: addImage('../media/images/work-at-the-office/conference-room.jpg'),
			b: 'The Terminator',
			c: 'Waluigi, obviously'
		},
		correctAnswer: 'c'
	},
	{
		question: 'What is the best site ever created?',
		answers: {
			a: 'SitePoint',
			b: 'Simple Steps Code',
			c: "Trick question; they're both the best"
		},
		correctAnswer: 'c'
	},
	{
		question: 'Where is Waldo really?',
		answers: {
			a: 'Antarctica',
			b: 'Exploring the Pacific Ocean',
			c: 'Sitting in a tree',
			d: 'Minding his own business, so stop asking'
		},
		correctAnswer: 'd'
	}
];

buildQuiz = () => {
	const output = [];

	// for each question
	myQuestions.forEach((currentQuestion, questionNumber) => {
		// store list of anser choices
		const answers = [];

		// and for each available answer
		for (letter in currentQuestion.answers) {
			// add HTML radio button
			answers.push(
				`<label>
				<input type="radio" name="question${questionNumber}" value="${letter}">
				${letter} : 
				${currentQuestion.answers[letter]}
				</label>
				`
			);
		}

		output.push(`
			<div class="question">${currentQuestion.question}</div>
			<div class="answers">${answers.join('')}</div>
		`);
	});

	quizContainer.innerHTML = output.join('');
};

showResults = () => {
	// gather answers from our quiz
	const answerContainers = quizContainer.querySelectorAll('.answers');

	// keep track of user's answers
	let numCorrect = 0;

	// for each question...
	myQuestions.forEach((currentQuestion, questionNumber) => {
		// find selected answer
		const answerContainer = answerContainers[questionNumber];
		const selector = 'input[name=question' + questionNumber + ']:checked';
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;

		if (userAnswer === currentQuestion.correctAnswer) {
			//increment correct answers
			numCorrect++;

			// add green coloring to questions
			answerContainers[questionNumber].style.color = 'lightgreen';
		} else {
			answerContainers[questionNumber].style.color = 'red';
		}
	});

	// show correct answers
	resultsContainer.innerHTML = numCorrect + ` out of ` + myQuestions.length;
};

buildQuiz();

submitButton.addEventListener('click', showResults);
