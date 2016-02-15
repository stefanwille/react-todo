import React from 'react'

const labels = {ALL: 'All', ACTIVE: 'Active', COMPLETED: 'Completed'}

const TodoFilter = ({todos, todoFilter, onChange}) => (
  <div className='todo-filter'>
    <label className='control-label input-group'>Filter</label>
    <div className='btn-group' data-toggle='buttons'>
      {
        ['ALL', 'ACTIVE', 'COMPLETED'].map((filter) => {
          let className = 'btn btn-default'
          if (filter === todoFilter) {
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
        })
      }
    </div>
  </div>
)

export default TodoFilter

