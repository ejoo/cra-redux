import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';
import {Provider} from 'react-redux';

let Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
)


// store.subscribe(() => {
	
// 	Root = () => (
// 	<Provider store={store}>
// 		<App />
// 	</Provider>
// )	
// })

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
