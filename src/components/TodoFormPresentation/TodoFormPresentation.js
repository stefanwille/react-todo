import React, { PropTypes } from 'react'

class TodoFormPresentation extends React.Component {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired
  };

  render () {
    return (
      <div className='todo-form'>
      <form className='form-inline' onSubmit={event => this.handleSubmit(event)}>
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

  handleSubmit (event) {
    event.preventDefault()
    this.props.onAddTodo(this.input.value)
    this.input.value = ''
  }
}

export default TodoFormPresentation
