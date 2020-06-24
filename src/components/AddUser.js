import React , { Component } from 'react';
import propTypes from 'prop-types';

class AddUser extends Component {

  state = {
    user : {
    firstName : '',
    lastName : '',
    userName : '',
    },
    userExist : false,
  }

contactExist = currenUserName => {
  const users = this.props.users;

    for (let user of users) {
       if (user.username === currenUserName) {
         return true;
       }
     }
     return false;
   };

handleSubmitEvent = event => {
  event.preventDefault();
  const userExist = this.contactExist(this.state.user.userName)

  if (!userExist){
    this.props.onAddUser(this.state.user);
  } this.setState (() =>({
    userExist,
  }) );
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

       {this.state.userExist ? (
         <p>Oh, this user already exists</p>
       ): (
           ' '
         )}

      </div>
    );
  }
}
AddUser.propTypes = {
  onAddUser : propTypes.func.isRequired,
  users : propTypes.array.isRequired,

};

export default AddUser;
