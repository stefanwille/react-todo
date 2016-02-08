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
              <input type='text' ref={node => this.input = node} onKeyDown={this.handleKeyDown.bind(this)} />
              &nbsp;
              <button className='btn btn-default'
                       onClick={this.handleClick.bind(this)}
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
     </table>
    )
  }

  handleClick () {
    this.submit()
  }

  handleKeyDown (event) {
    if (event.keyCode === 13) {
      this.submit()
    }
  }

  submit () {
    this.props.onAddTodo(this.input.value)
    this.input.value = ''
  }
}

export default TodoForm

