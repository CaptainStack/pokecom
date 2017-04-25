import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import makeStore from './store'

export const store = makeStore();
export const render = () => ReactDOM.render(<App state={store.getState()} />, document.getElementById('root'));

render();
store.subscribe(render);
