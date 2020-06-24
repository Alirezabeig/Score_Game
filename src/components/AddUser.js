import React , { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {

  state = {
    user : {
      firstName : '',
      lastName : '',
      userName : '',
    },
    userExists : false,
  }

contactExists = currUsername => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    return false;
  };


handleSubmit = event => {
  event.preventDefault();
  const userExists = this.contactExists(this.state.user.userName);

  if (!userExists){
    this.props.onAddUser(this.state.user);
  }
   this.setState (() =>({
    userExists,
  }));
};



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

isDisabled = () => {
  const { firstName, lastName, username } = this.state.user;
  return firstName === '' || lastName === '' || username === '';
};

  render (){

    const { firstName, lastName, userName } = this.state.user

    return (
      <div>
      <h1>New User</h1>

      <form onSubmit = {this.handleSubmit} >
        <div>
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
        </div>
          <button disabled={this.isDisabled()}>Add</button>
       </form>

       {this.state.userExists ? (
         <p>Oh, this user already exists</p>
       ): (
           ' '
         )}

      </div>
    );
  }
}
AddUser.propTypes = {
  onAddUser : PropTypes.func.isRequired,
  users : PropTypes.array.isRequired,

};

export default AddUser;
