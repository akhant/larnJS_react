import React from 'react';
import App from './App/index';
import { Provider } from 'react-redux';
import store from '../store';

function Root(props) {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

Root.propTypes = {};
Root.defaultProps = {};

export default Root;
