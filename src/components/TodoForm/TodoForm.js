import React, { PropTypes } from 'react'

class TodoForm extends React.Component {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired
  };

  render () {
    return (
      <div className='todo-form'>
      <form className='form-inline' onSubmit={this.handleFormSubmit.bind(this)}>
          <input type='text'
              className='form-control text-input'
              ref={node => this.input = node}
              placeholder='What needs to be done?'
            />
        &nbsp;
        <button className='btn btn-default'>Add</button>
      </form>
      </div>
    )
  }

  handleFormSubmit (event) {
    event.preventDefault()

    const text = this.input.value
    if (text !== '') {
      this.props.onAddTodo(text)
      this.input.value = ''
    }
  }
}

export default TodoForm
