import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import App from './App';

//Set cookies to send
axios.defaults.withCredentials = true;

ReactDom.render(<App></App>, document.getElementById('root'));