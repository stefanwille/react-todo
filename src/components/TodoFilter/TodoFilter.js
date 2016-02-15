import React from 'react'

const labels = {ALL: 'All', ACTIVE: 'Active', COMPLETED: 'Completed'}

const TodoFilter = ({todos, todoFilter, onChange}) => (
  <div className='todo-filter'>
    <label className='control-label input-group'>Filter</label>
    <div className='btn-group' data-toggle='buttons'>
      {
        ['ALL', 'ACTIVE', 'COMPLETED'].map((todoFilter) => {
          let className = 'btn btn-default'
          if (todoFilter === this.props.todoFilter) {
            className += ' active'
          }
          const label = labels[todoFilter]
          return (
            <label key={todoFilter} className={className}>
              <input name='year'
                      value={todoFilter}
                      type='radio'
                      onClick={this.props.onChange.bind(this, todoFilter)}/>{label}
            </label>
          )
        })
      }
    </div>
  </div>
)

export default TodoFilter
