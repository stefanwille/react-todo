import React, {PropTypes} from 'react'

const RadioSelection = ({children}) => (
  <div className='btn-group' data-toggle='buttons'>
    {children}
  </div>
)

RadioSelection.propTypes = {
}

RadioSelection.Option = ({option, label, active, onChange}) => {
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

RadioSelection.Option.propTypes = {
  option: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RadioSelection
