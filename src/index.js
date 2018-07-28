import React from 'react';
import ReactDOM from 'react-dom';
import './assests/css/index.css';
import Root from './router/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
