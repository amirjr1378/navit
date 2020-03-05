import React from 'react';
import PropTypes from 'prop-types';
import "./Input.styles.scss"
function Input({ label, ...otherProps }) {
    return (
        <label className="input-container">
            <input className="input__placeholder" {...otherProps} />
            <div className="input__label">{label}</div>
        </label>
    );
}


Input.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Input;
