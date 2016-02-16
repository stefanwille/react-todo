import React, { PropTypes } from 'react'
import {connect} from 'react-redux'

import {selectTodoFilter} from 'actions/actions'
import RadioSelection from 'components/RadioSelection/RadioSelection'
import RadioSelectionOption from 'components/RadioSelectionOption/RadioSelectionOption'

const mapStateToProps = (state) => {
  return {
    selected: state.todoFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: todoFilter => dispatch(selectTodoFilter(todoFilter))
  }
}

const TodoFilterPresentation = ({selected, onChange}) => (
  <div className='todo-filter'>
    <label className='control-label input-group'>Filter</label>
    <RadioSelection>
      <RadioSelectionOption option='ALL' label='All' active={selected === 'ALL'} onChange={onChange} />
      <RadioSelectionOption option='ACTIVE' label='Active' active={selected === 'ACTIVE'} onChange={onChange} />
      <RadioSelectionOption option='COMPLETED' label='Completed' active={selected === 'COMPLETED'} onChange={onChange} />
    </RadioSelection>
  </div>
)

TodoFilterPresentation.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

const TodoFilter = connect(mapStateToProps, mapDispatchToProps)(TodoFilterPresentation)

export default TodoFilter
