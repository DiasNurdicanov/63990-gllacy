var form = document.querySelector('.form');
var btn = document.querySelector('.form-btn');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.close');

btn.addEventListener('click', function(event) {
	event.preventDefault();

	form.classList.add('show');
});

overlay.addEventListener('click', function(event) {
	event.preventDefault();

	form.classList.remove('show');
});

close.addEventListener('click', function(event) {
	event.preventDefault();

	form.classList.remove('show');
});