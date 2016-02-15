import React, { PropTypes } from 'react'

import RadioSelection from 'components/RadioSelection/RadioSelection'

const labels = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed'
}

const TodoFilter = ({selected, onChange}) => (
  <div className='todo-filter'>
    <label className='control-label input-group'>Filter</label>
    <RadioSelection
        options={['ALL', 'ACTIVE', 'COMPLETED']}
        labels={labels}
        selected={selected}
        onChange={onChange}
    />
  </div>
)

TodoFilter.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoFilter
