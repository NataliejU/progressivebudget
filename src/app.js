// Named exports - need exact names, import order doesn't matter
// Default export (if present) must come before named exports. Can be called anything
// EXAMPLE:: import /*default export,*/ { /*named exports*/ } from './utils.js';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById("app"));