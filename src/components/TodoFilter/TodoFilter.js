import React, { PropTypes } from 'react'

class TodoFilter extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    todoFilter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render () {
    console.log('TodoFilter render', this.props.todoFilter)

    const labels = {ALL: 'All', ACTIVE: 'Active', COMPLETED: 'Completed'}

    return (
      <div className='todo-filter'>

      <label>3 items left</label>

      <label className='control-label input-group'>Filter</label>
      <div className='btn-group' data-toggle='buttons'>
        {
          ['ALL', 'ACTIVE', 'COMPLETED'].map((todoFilter) => {
            let className = 'btn btn-default'
            let label = labels[todoFilter]
            if (todoFilter === this.props.todoFilter) {
              className += ' active'
            }
            return (
              <label key={todoFilter} className={className}><input name='year' value={todoFilter} type='radio' onClick={() => { this.handleClick(todoFilter) }}/>{label}</label>
            )
          })
        }
      </div>
      </div>
    )
  }

  handleClick (todoFilter) {
    console.log('handleClick', todoFilter)
    this.props.onChange(todoFilter)
  }
}

export default TodoFilter
