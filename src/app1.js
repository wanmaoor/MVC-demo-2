import './app1.css';
import $ from 'jquery';

const eventBus = $({});
// MODEL
const Model = {
	data: {
		num: parseInt(localStorage.getItem('res')) || 20,
	},
	update(data) {
		Object.assign(Model.data, data);
		eventBus.trigger('numUpdated');
	}
};
// VIEW
const View = {
	el: '#app1',
	html(replacer) {
		return `
		<div class="app">
    <p id="display">${replacer}</p>
    <div id="buttons">
      <button id="button1">+2</button>
      <button id="button2">-2</button>
      <button id="button3">x2</button>
      <button id="button4">/2</button>
    </div>
  </div>
	`;
	},
	mount(data) {
		$(View.html(data)).appendTo($(View.el));
		Controller.bindEvents();
		eventBus.on('numUpdated', () => {
			View.render(Model.data.num);
		});
	},
	render(data) {
		let newElements = $(View.html(data));
		localStorage.setItem('res', data);
		$(View.el).children().replaceWith(newElements);
	}
};
// CONTROLLER
const Controller = {
	events: {
		add: 'click #button1',
		sub: 'click #button2',
		multi: 'click #button3',
		divide: 'click #button4',
	},
	bindEvents() {
		for (const key in Controller.events) {
			if (Controller.events.hasOwnProperty(key)) {
				const [event, selector] = Controller.events[key].split(' ');
				$(View.el).on(event, selector, Controller[key]);
			}
		}
	},
	add() {
		Model.update({num: Model.data.num + 1})
	},
	sub() {
		Model.update({num: Model.data.num - 1})
	},
	multi() {
		Model.update({num: Model.data.num * 2})
	},
	divide() {
		Model.update({num: Model.data.num / 2})
	}
};

View.mount(Model.data.num);
