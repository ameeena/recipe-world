import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Root from './Root';
import store from './stores/configureStore';

// Use Root Component
render(<Root store = {store}/>, document.getElementById('root'));