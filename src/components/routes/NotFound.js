import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NotFound = (props) => {
    return (
        <div>
            <h1>Page not found</h1>
            <Link to="/">Go to home page</Link>
        </div>
    );
};

NotFound.propTypes = {};
NotFound.defaultProps = {};

export default NotFound;
