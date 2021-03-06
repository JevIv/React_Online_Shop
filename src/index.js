import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import AppContainer from './containers/AppContainer';
import reportWebVitals from './reportWebVitals';
import createStore from "./store";
import 'semantic-ui-css/semantic.min.css'
import './app.css'

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
