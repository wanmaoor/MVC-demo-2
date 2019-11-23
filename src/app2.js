import $ from 'jquery';
import './app2.css';

const eventBus = $({});
const Model = {
	data: {
		index: parseInt(localStorage.getItem('index')) || 0
	},
	update(data) {
		Object.assign(Model.data, data);
		localStorage.setItem('index', Model.data.index.toString());
		eventBus.trigger('indexChanged');
	}
};
const View = {
	el: '#app2',
	html(index) {
		return `
			<div class="app">
    		<ol class="tab-bar">
      		<li class="${index === 0 ? 'selected' : ''}">1</li>
      		<li class="${index === 1 ? 'selected' : ''}">2</li>
    		</ol>
    		<ol class="tab-content">
      		<li class="${index === 0 ? 'active' : ''}">content 1</li>
      		<li class="${index === 1 ? 'active' : ''}">content 2</li>
    		</ol>
  		</div>
		`;
	},
	mount(data) {
		$(View.html(data)).appendTo(View.el);
		Controller.bindEvents();
		eventBus.on('indexChanged', () => {
			View.render(Model.data.index);
		});
	},
	render(data) {
		let newElements = $(View.html(data));
		$(View.el).children().replaceWith(newElements);
	}
};
const Controller = {
	events: {
		changeTab: 'click li'
	},
	bindEvents() {
		for (const key in Controller.events) {
			if (Controller.events.hasOwnProperty(key)) {
				const [event, selector] = Controller.events[key].split(' ');
				$(View.el).on(event, selector, Controller[key]);
			}
		}
	},
	changeTab() {
		Model.update({index: Model.data.index === 1 ? 0 : 1});
	}
};
View.mount(Model.data.index);
