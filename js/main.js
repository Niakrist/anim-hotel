const houses = document.querySelectorAll('.test');
const itog = document.querySelector('.itog');


houses.forEach(function(house, index) {
	house.addEventListener('click', () => {
		itog.textContent = 'Нажади на дом с индексом ' + index;
	})
})