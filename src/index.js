import React from 'react';
import {render} from 'react-snapshot';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {rootReducer} from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
