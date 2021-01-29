import React, { Component } from 'react';


export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      task: ''
    }
    
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();                    //! Always need for forms to prevent form from resetting front end
    this.props.addTodo( this.state.task );
    this.setState({
      task: ''
    })
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input onChange={ e => this.handleChange(e) } value={ this.state.task } 
          placeholder="Type todo here..." 
          type="text" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}