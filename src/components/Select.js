import React from 'react';
import PropTypes from 'prop-types'

export default function SelectComponent({ data, className, onChange, value }) {
    return (
        <select 
            className={className}
            value={value}
            onChange={onChange}>
            {data && data.map((op, indx) =>
                <option key={indx} value={op.value}>{op.label}</option>
            )}
        </select>
    );
}

SelectComponent.propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    data: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}