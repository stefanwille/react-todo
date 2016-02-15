import React, { PropTypes } from 'react'

const RadioSelectionOption = ({option, label, active, onChange}) => {
  let className = 'btn btn-default'
  if (active) {
    className += ' active'
  }
  return (
    <label key={option} className={className}>
      <input
              value={option}
              type='radio'
              onClick={() => onChange(option)}/>{label}
    </label>
  )
}

RadioSelectionOption.propTypes = {
  option: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RadioSelectionOption
