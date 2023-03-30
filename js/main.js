const houses = document.querySelectorAll('.test');
const itog = document.querySelector('.itog');


houses.forEach(function(house, index) {
	house.addEventListener('click', () => {
		itog.textContent = 'Дом с индексом ' + index;
	})
})
