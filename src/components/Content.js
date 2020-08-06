import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'

export default function ContentComponent({ className, children }) {
  return (
    <div className={classnames("content", className)}>
      {children}
    </div>
  );
}

ContentComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
