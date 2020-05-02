let red = document.querySelector('.red'),
green = document.querySelector('.green'),
gold = document.querySelector('.gold'),
black = document.querySelector('.dark'),
orange = document.querySelector('.orange'),
circlee = document.querySelectorAll('.circle'),
body = document.querySelector('body');

red.addEventListener('mouseenter', function(){
	red.style.background = 'red';
	red.style.color = 'white';
});
green.addEventListener('mouseenter', function(){
	green.style.background = 'green';
	green.style.color = 'white';
});
gold.addEventListener('mouseenter', function(){
	gold.style.background = 'gold';
	gold.style.color = 'white';
});
black.addEventListener('mouseenter', function(){
	black.style.background = 'black';
	black.style.color = 'white';
});
orange.addEventListener('mouseenter', function(){
	orange.style.background = 'orange';
	orange.style.color = 'white';
});
	// --------------------------mouseleave-----------------------


red.addEventListener('mouseleave', function(){
	red.style.background = 'white';
	red.style.color = 'black';
});
green.addEventListener('mouseleave', function(){
	green.style.background = 'white';
	green.style.color = 'black';
});
gold.addEventListener('mouseleave', function(){
	gold.style.background = 'white';
	gold.style.color = 'black';
});
black.addEventListener('mouseleave', function(){
	black.style.background = 'white';
	black.style.color = 'black';
});
orange.addEventListener('mouseleave', function(){
	orange.style.background = 'white';
	orange.style.color = 'black';
});

// --------------------click----------------


red.addEventListener('click', function(){
	red.style.transform = 'translateX(100px)';
	body.style.background = 'red';
});
green.addEventListener('click', function(){
	green.style.transform = 'translateX(100px)';
	body.style.background = 'green';
});
gold.addEventListener('click', function(){
	gold.style.transform = 'translateX(100px)';
	body.style.background = 'gold';
});
black.addEventListener('click', function(){
	black.style.transform = 'translateX(100px)';
	body.style.background = 'black';
});
orange.addEventListener('click', function(){
	orange.style.transform = 'translateX(100px)';
	body.style.background = 'orange';
});










