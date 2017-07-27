import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import './index.css';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
