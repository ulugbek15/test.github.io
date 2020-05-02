let btn = document.getElementsByTagName('button');
let body = document.querySelector('body');

btn[0].addEventListener('click', function(){
		btn[0].style.background = 'initial';
		btn[0].style.marginLeft = '200px';
});
btn[0].addEventListener('mouseenter', function(){
		btn[0].style.background = 'green';
		btn[0].style.marginLeft = '100px';
});
btn[0].addEventListener('mouseleave', function(){
		body.style.background = 'red';
		btn[0].style.backgroundColor = '100px';
});

let a = prompt('nmadur yoz', '');
	b = [];
	b = a.split(', ');
	btn[0].innerHTML = b;
	btn[2].innerHTML = b;





