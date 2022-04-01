
function stepForm() {

	const steps = document.querySelectorAll('.form__step');
	const btns = document.querySelector('.buttons');
	const prevBtn = document.querySelector('.button-prev');
	const nextBtn = document.querySelector('.button-next');
	const form = document.querySelector('.form__items');
	const stepNumber = document.querySelectorAll('.form__step-number');
	const progress = document.querySelector('.form__progress-succsess');
	const finishBlock = document.querySelector('.finish');

	form.addEventListener('submit', e => e.preventDefault());

	let stepFormIndex = 0;

	prevBtn.addEventListener('click', () => {
		stepFormIndex--;
		stepNumber[stepFormIndex + 1].classList.remove('form__step-number--active');
		updateFormSteps();
	})

	nextBtn.addEventListener('click', () => {
		stepFormIndex++;
		updateFormSteps();
	})

	function updateFormSteps() {
		steps.forEach(step => {
			step.classList.contains('active') && step.classList.remove('active')
		});

		steps[stepFormIndex].classList.add('active');
		stepNumber[stepFormIndex].classList.add('form__step-number--active')

		if(stepFormIndex === 0) {
			prevBtn.style.display = 'none';
		} else {
			prevBtn.style.display = 'block';
		}

		if( stepFormIndex === steps.length - 1) {
			nextBtn.innerHTML = 'Finish';

			nextBtn.addEventListener('click', () => {
				finishBlock.style.display = 'block';
				form.style.display = 'none';
				btns.style.display = 'none';
			});
		} else {
			nextBtn.innerHTML = 'Next';
		}

		const actives = document.querySelectorAll('.form__step-number--active');
		const persent = ((actives.length - 1)/(stepNumber.length - 1)) * 100 + '%';

		progress.style.width = persent; 

	}
	updateFormSteps();
}

stepForm();