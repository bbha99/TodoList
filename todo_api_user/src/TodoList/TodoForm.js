import React, { Component } from "react";
import { TextField, Button, Grid } from "@mui/material";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api_url: props.api_url,
      task: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formSubmit(event.target);
  }

  async formSubmit(formData) {
    var data = new FormData(formData);
    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data
    }).then(response => response.json())
      .then(response => this.props.updateTodoList(response));
  }

  handleTaskChange(event) {
    this.setState({
      task: event.target.value
    });
  }

  render() {
    return (
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={10}>
          <form
            onSubmit={this.handleSubmit}
            id="todo_form"
            autoComplete="off">
            <Grid container>
              <Grid item xs={10}>
                <TextField
                  id="task_input"
                  multiline
                  rows={2}
                  label="Task Description"
                  placeholder="Enter a description"
                  variant="outlined"
                  type="text"
                  name="todo[task]"
                  onChange={this.handleTaskChange}
                  fullWidth />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{height: "100%"}}>Add Task
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    );
  }
}

export default TodoForm;