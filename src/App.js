import React from 'react';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import './components/Todo.css'

const todos = [
  {
    task: '',
    id: '',
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  handleToggleTask = (taskId) => {
    this.setState({
      todos:this.state.todos.map(task => {
        if(taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task;
        }
      })
    })
    console.log('Our task id:', taskId)
  }

  handleAddTodo = (task) => {
    this.setState({
      todos:[...this.state.todos, {
        task: task,
        id: Date.now(),
        completed: false,
      }]
    })
  }

  clearTasks = () => {
    this.setState({
      todos:this.state.todos.filter(todo => (!todo.completed))
    })
  }

  render() {
    return (
      <div>
        <h1>Git 'Er Done</h1>
        <TodoList todo={this.state.todos} handleToggleTask={this.handleToggleTask}/>
        <TodoForm handleAddTodo={this.handleAddTodo} handleClearSubmitTasks={this.clearTasks} />
      </div>
    );
  }
}

export default App;
