import React, {Component} from "react"
import { TextField, Button } from "@mui/material"

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api_url: props.api_url,
      task: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.formSubmit(event.target);
  }

  async formSubmit(formData) {
    var data = new FormData(formData);
    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data
    }).then(response => response.json())
    .then(response => this.props.updateTodoList(response))
  }

  handleTaskChange(event) {
    this.setState({
      task: event.target.value
    })
  }

  render () {
    return (
      <div>
        <form 
        onSubmit={this.handleSubmit}
        id="todo_form"
        autoComplete="off">
          
          <TextField 
          id="task_input"
          multiline
          rows={2}
          label="Task Description"
          placeholder="Enter a description"
          variant="outlined"
          type="text"
          name="todo[task]"
          onChange={this.handleTaskChange}/>
          
          <Button 
          variant="contained"
          color="primary"
          type="submit">Add Task
          </Button>
        </form>
      </div>
    )
  }
}

export default TodoForm;