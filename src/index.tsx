import * as React from "react"
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import App from './components/App';
import configureStore from './redux/configureStore';

const store = configureStore();


render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);