import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import makeStore from './store'

export const store = makeStore();
const render = () => ReactDOM.render(<App state={store.getState()} />, document.getElementById('root'));

render();
store.subscribe(render);
