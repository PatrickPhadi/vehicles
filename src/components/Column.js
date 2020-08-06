import React from 'react';
import classes from 'classnames';
import PropTypes from 'prop-types'

export default function ColumnComponent({ children, className }) {
    return (
        <div className={classes(className, "column")}>
            {children}
        </div>
    );
}

ColumnComponent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}