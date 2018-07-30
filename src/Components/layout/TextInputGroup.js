import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

const TextInputGroup = (props) => {
  const {
    type,
    value,
    onChange,
    name,
    placeholder,
    label,
    error
  } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}/>
        {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextInputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup