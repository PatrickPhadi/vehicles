import React from 'react';
import classes from 'classnames';
import PropTypes from 'prop-types'

export default function RowComponent({ children, className }) {
    return (
        <div className={classes("row", className)}>
            {children}
        </div>
    );
}

RowComponent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}