import React , { Component } from 'react';

class AddUser extends Component {

  state = {
    user : {
    firstName : '',
    lastName : '',
    userName : '',
    },


  }

handleInputChange = event => {
  const { name , value } = event.target;

  this.setState(currState => ({
    ...currState,
    user : {
      ...currState.user,
      [name] : value,
    },
  }));
};

  render (){

    const { firstName, lastName, userName } = this.state.user

    return (
      <div>
      <h1>New User</h1>

      <form onSubmit = {this.handleSubmit} >

        <input
        type= "text"
        name= "firstName"
        placeholder = "first name"
        value= {firstName}
        onChange = {this.handleInputChange}/>



        <input
        type= "text"
        name= "lastName"
        placeholder = "last name"
        value= {lastName}
        onChange = {this.handleInputChange}/>

        <input
        type= "text"
        name= "userName"
        placeholder = "user name"
        value= {userName}
        onChange = {this.handleInputChange}/>

       <input type = "submit" value = "submit" />
       </form>

      </div>
    );
  }
}

export default AddUser;
