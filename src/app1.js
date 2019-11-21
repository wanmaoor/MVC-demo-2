import './app1.css';
import $ from 'jquery'

// MODEL
const Model = {

}
// VIEW
const View = {}
// CONTROLLER
const Controller = {}

const $display = $('#display');
const $button1 = $('#button1');
const $button2 = $('#button2');
const $button3 = $('#button3');
const $button4 = $('#button4');
const num = parseInt(localStorage.getItem('res'));
$display.text(num || 10)
$button1.on('click', () => {
	let res = parseInt($display.text());
	res += 2;
	localStorage.setItem('res', res.toString());
	$display.text(res);
});

$button2.on('click', () => {
	let res = parseInt($display.text());
	res -= 2;
	localStorage.setItem('res', res.toString());
	$display.text(res);
});

$button3.on('click', () => {
	let res = parseInt($display.text());
	res *= 2;
	localStorage.setItem('res', res.toString());
	$display.text(res)
});

$button4.on('click', () => {
	let res = parseInt($display.text());
	res /= 2;
	localStorage.setItem('res', res.toString());
	$display.text(res);
});
