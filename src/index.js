import Vue from 'vue';
import App from './components/App.vue';

const app = window.app = new Vue({
	el: '#app',
	render: h => h(App)
});
