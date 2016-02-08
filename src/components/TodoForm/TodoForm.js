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
              <form className='form-inline' onSubmit={this.handleFormSubmit.bind(this)}>
                <div className='form-group'>
                  <input type='text' className='form-control'
                  ref={node => this.input = node}
                  onKeyDown={this.handleKeyDown.bind(this)}
                  placeholder='What needs to be done?'
                />
                </div>
                <button className='btn btn-default'>
                  Add
                </button>
              </form>
            </td>
          </tr>
        </tbody>
     </table>
    )
  }

  handleFormSubmit (event) {
    event.preventDefault()
    this.addTodo()
  }

  handleKeyDown (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.addTodo()
    }
  }

  addTodo () {
    this.props.onAddTodo(this.input.value)
    this.input.value = ''
  }
}

export default TodoForm

