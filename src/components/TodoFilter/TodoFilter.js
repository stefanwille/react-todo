import React, { PropTypes } from 'react'

import TodoFilterOption from 'components/TodoFilterOption/TodoFilterOption'

const TodoFilter = ({todos, todoFilter, onChange}) => (
  <div className='todo-filter'>
    <label className='control-label input-group'>Filter</label>
    <div className='btn-group' data-toggle='buttons'>
      {
        ['ALL', 'ACTIVE', 'COMPLETED'].map((filter) => {
          return (
            <TodoFilterOption
                  key={filter}
                  filter={filter}
                  active={filter === todoFilter}
                  onChange={onChange}
                />
          )
        })
      }
    </div>
  </div>
)

TodoFilter.propTypes = {
  todos: PropTypes.array.isRequired,
  todoFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoFilter
