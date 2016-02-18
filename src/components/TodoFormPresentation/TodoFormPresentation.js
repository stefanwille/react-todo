import React, { PropTypes } from 'react'

const TodoFormPresentation = ({onAddTodo}) => {
  let input
  return (
    <div className='todo-form'>
    <form className='form-inline' onSubmit={(event) => { handleSubmit(event, input, onAddTodo) }}>
        <input type='text'
            className='form-control text-input'
            ref={node => { input = node }}
            placeholder='What needs to be done?'
          />
      &nbsp;
      <button className='btn btn-default'>Add</button>
    </form>
    </div>
  )
}

const handleSubmit = (event, input, onAddTodo) => {
  event.preventDefault()
  onAddTodo(input.value)
  input.value = ''
}

TodoFormPresentation.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

export default TodoFormPresentation
