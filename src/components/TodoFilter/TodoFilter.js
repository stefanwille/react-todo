import React, { PropTypes } from 'react'

import RadioSelection from 'components/RadioSelection/RadioSelection'
import RadioSelectionOption from 'components/RadioSelectionOption/RadioSelectionOption'

const TodoFilter = ({selected, onChange}) => (
  <div className='todo-filter'>
    <label className='control-label input-group'>Filter</label>
    <RadioSelection>
      <RadioSelectionOption option='ALL' label='All' active={selected === 'ALL'} onChange={onChange} />
      <RadioSelectionOption option='ACTIVE' label='Active' active={selected === 'ACTIVE'} onChange={onChange} />
      <RadioSelectionOption option='COMPLETED' label='Completed' active={selected === 'COMPLETED'} onChange={onChange} />
    </RadioSelection>
  </div>
)

TodoFilter.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoFilter
