import React, { PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router'
// import { actions as counterActions } from '../../redux/modules/counter'

// import DuckImage from './Duck.jpg'
// import classes from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
// const mapStateToProps = (state) => ({
//   counter: state.counter
// })

export class HomeView extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <h1>Todo App in React.js</h1>
          <TodoForm onAddTodo={this.handleAddTodo.bind(this)} />
           <TodoList todos={this.props.store.getState().todos} onTodoCompleted={this.handleTodoCompleted.bind(this)} />
        </div>
      </div>
    )
  }

  handleAddTodo (text) {
    console.log('handleAddTodo', text)
    // this.props.store.dispatch({type: 'ADD_TODO', text: text, completed: false, id: Date.now()})
  }

  handleTodoCompleted (todo) {
    console.log('handleCompleted', todo)
    // this.props.store.dispatch({type: 'UPDATE_TODO', id: todo.id, updates: {completed: !todo.completed}})
  }
}

class TodoForm extends React.Component {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired
  };

  render () {
    return (
       <button className='btn btn-default'
               onClick={this.handleClick.bind(this)}
        >
            Add Todo
       </button>
    )
  }

  handleClick () {
    this.props.onAddTodo('huhuuu')
  }
}

class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoCompleted: PropTypes.func.isRequired
  };

  render () {
    return (
      <ul className='todos'>
        { this.props.todos.map(todo => (
                                <Todo todo={todo} onCompleted={this.props.onTodoCompleted} key={todo.id} />
                            )
        )}
      </ul>
    )
  }
}

class Todo extends React.Component {
  static propTypes = {
    todo: PropTypes.any.isRequired,
    onCompleted: PropTypes.func.isRequired
  };

  render () {
    const textStyle = this.props.todo.completed ? {'text-decoration': 'line-through'} : {}
    return (
      <li className='todo'>
        <span style={textStyle}>
          {this.props.todo.text}
        </span>
        &nbsp;
        &nbsp;
        <input type='checkbox' value={this.props.todo.completed} onChange={() => { this.props.onCompleted(this.props.todo) } } />
      </li>
    )
  }
}

export default HomeView

// export default connect(mapStateToProps, counterActions)(HomeView)
