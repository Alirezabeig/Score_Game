import React , { Component } from 'react';

class AddUser extends Component {

  state = {
    value : ''
  }

  handleChange(event) {
    this.setState({value : event.target.value });
  }

  render (){
    return (
      <div>
      <h1>New User</h1>

      <form onSubmit = {this.handleSubmit} >
       <label>
        name:
        <input type= "text" value= {this.state.value} onChange = {this.handleChange}/>
       </label>
       <input type = "submit" value = "submit" />
       </form>




      </div>
    );
  }
}

export default AddUser;
