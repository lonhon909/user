import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './css/style.css';
import './css/style1.css';
import './js/hotcss.js';
import './iconfont/iconfont.css';

//引入数据库
import store from './redux/store.js';
//React-Redux 提供 Provider 组件，可以让容器组件拿到 state 。
import { Provider } from 'react-redux';


function render(){
	ReactDOM.render(
		//React-Redux 提供 Provider 组件，可以让容器组件拿到 state 。
		<Provider store={store}>
			<App />
		</Provider>, 
		document.getElementById('root')
	);
}

//默认启动时调用一次
render();
//监听
store.subscribe(render);

registerServiceWorker();
