import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createStore from "./store";

const store = createStore();

setTimeout(function () {
    store.dispatch({
        type: 'SET_BOOK',
        payload: [
            {
                id:0,
                title: 'Just book!'
            }
        ]
    });
}, 1000);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
