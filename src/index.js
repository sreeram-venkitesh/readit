import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import List from './components/List'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <br/>
    <List />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
