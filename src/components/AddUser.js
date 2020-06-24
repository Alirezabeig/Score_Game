import React , { Component } from 'react';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    this.setState({value : event.target.value });
  }

  render (){
    return (
      <div>
      <h1>New User</h1>

      <form onSubmit = {this.handleSubmit} >

        <input
        type= "text"
        name= "name"
        placeholder = "first name"
        value= {firstName}
        onChange = {this.handleInputChange}/>

        <input
        type= "text"
        name= "last"
        placeholder = "last name"
        value= {lastName}
        onChange = {this.handleInputChange}/>

        <input
        type= "text"
        name= "username"
        placeholder = "username"
        value= {firstName}
        onChange = {this.handleInputChange}/>

       <input type = "submit" value = "submit" />
       </form>




      </div>
    );
  }
}

export default AddUser;
