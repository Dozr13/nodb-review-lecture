import React, { Component } from 'react';
import Todo from './Todo'
import Form from './Form.js'

//! Since this component is getting the info from the server, import axios to use in axios.get fujnction
import axios from 'axios'

export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  //! To fire function getaTodos on fire
  componentDidMount(){
    this.getTodos();
  }


  getTodos = () => {
    axios.get('/api/todos')
    .then( res => {
      this.setState({
        todos: res.data
      })
    }).catch( err => console.log(err))
  }


  //!      task is in the server as what is needed axios.post takes that object
  addTodo = (task) => {
    axios.post('/api/todos', {task})
    .then( res => {
      this.setState({
        todos: res.data
      })
    }).catch( err => console.log(err))
  }

  completeTodo = id => {
    axios.put(`/api/todos/${ id }`)
    .then( res => {
      this.setState({
        todos: res.data
      })
    }).catch(err => console.log(err))
  }

  deleteTodo = id => {
    axios.delete(`/api/todos/${ id }`)
    .then( res => {
      this.setState({
        todos: res.data
      })
    }).catch(err => console.log(err))
  }



  render(){
    const mappedTodos = this.state.todos.map( todo => {
      return <Todo 
      key={ todo.id } 
      todo={ todo } 
      completeTodo={ this.completeTodo }
      deleteTodo={ this.deleteTodo }  />
    })

    return <div className="main">
      <Form addTodo={this.addTodo}/>
      { mappedTodos }
    </div>
  }
}
