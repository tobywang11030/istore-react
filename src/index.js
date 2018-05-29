import React from 'react';
import './static/css/App.css';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/Page'
import Footer from './components/Footer'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Page />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();
