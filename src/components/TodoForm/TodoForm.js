import React, { PropTypes } from 'react'

class TodoForm extends React.Component {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired
  };

  render () {
    return (
      <table className='todo-form todo-table'>
        <tbody>
          <tr>
            <td></td>
            <td>
              <button className='btn btn-default'
                       onClick={this.handleClick.bind(this)}
              >
                Add Todo
              </button>
            </td>
          </tr>
        </tbody>
     </table>
    )
  }

  handleClick () {
    this.props.onAddTodo('hoohooo')
  }
}

export default TodoForm

