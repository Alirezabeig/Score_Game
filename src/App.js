import React , {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';

class App extends Component {
  state = {
    users : [],
  }

  render () {
  return (
    <div>
    <AddUser users={this.state.users}  />
    </div>
  );
  }
}

export default App;
