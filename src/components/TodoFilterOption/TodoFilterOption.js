import React, { PropTypes } from 'react'

const labels = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed'
}

const TodoFilterOption = ({filter, active, onChange}) => {
  let className = 'btn btn-default'
  if (active) {
    className += ' active'
  }
  const label = labels[filter]
  return (
    <label key={filter} className={className}>
      <input name='year'
              value={filter}
              type='radio'
              onClick={onChange.bind(this, filter)}/>{label}
    </label>
  )
}

TodoFilterOption.propTypes = {
  filter: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoFilterOption
