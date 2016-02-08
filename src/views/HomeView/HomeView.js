import React, { PropTypes } from 'react'

import TodoForm from 'components/TodoForm/TodoForm'
import TodoList from 'components/TodoList/TodoList'

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
    this.props.store.dispatch({type: 'ADD_TODO', text: text, completed: false, id: Date.now()})
  }

  handleTodoCompleted (todo) {
    console.log('handleCompleted', todo)
    this.props.store.dispatch({type: 'UPDATE_TODO', id: todo.id, updates: {completed: !todo.completed}})
  }
}

export default HomeView

// export default connect(mapStateToProps, counterActions)(HomeView)
