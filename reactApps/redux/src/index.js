import ReactDOM from 'react-dom/client';
import Apps from './App.js';
import { Provider } from 'react-redux';
import store from './store.js';
import simpleRedux from './simpleRedux/part_002/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <Apps />
  </Provider>
);


