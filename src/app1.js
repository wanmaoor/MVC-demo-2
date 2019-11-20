import './app1.css';

const display = document.querySelector('#display');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const num = localStorage.getItem('res');

display.textContent = num || 0;

button1.addEventListener('click', () => {
	let res = parseInt(display.textContent);
	res += 2;
	localStorage.setItem('res', res.toString());
	display.textContent = res.toString();
});

button2.addEventListener('click', () => {
	let res = parseInt(display.textContent);
	res -= 2;
	localStorage.setItem('res', res.toString());
	display.textContent = res.toString();
});

button3.addEventListener('click', () => {
	let res = parseInt(display.textContent);
	res *= 2;
	localStorage.setItem('res', res.toString());
	display.textContent = res.toString();
});

button4.addEventListener('click', () => {
	let res = parseInt(display.textContent);
	res /= 2;
	localStorage.setItem('res', res.toString());
	display.textContent = res.toString();
});
