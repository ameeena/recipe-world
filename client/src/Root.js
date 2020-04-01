import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,  } from 'react-router-dom'
import App from './components/App';

//Wrapping your App component in a provider, makes redux store accessible to all the components in the application
// Store is passed. So it is only once.
const Root = ({store}) => (
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
)

Root.propTypes = {
    store : PropTypes.object.isRequired
};

export default Root;