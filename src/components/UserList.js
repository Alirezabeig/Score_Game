import React from 'react';
import PropTypes from 'prop-types';
import User from './User'


class UserList extends React.Component {

  state = {

    showGamesPlayed : true,
  }

  toggleStateGamePlayed = () => {
    this.setState ( oldGameState => ({
      showGamesPlayed : !oldGameState.showGamesPlayed,
    }));
  }

  render () {
    const { showGamesPlayed } = this.state;
    const {users } = this.props ;

    const gamesPlayedButton= (
      <div>
        <button onClick = {this.toggleStateGamePlayed }>
          { showGamesPlayed ? 'Hide' : 'Show' }
        </button>

      </div>
    )

    return (

      <div>
       <h1>Users</h1>
       {users && users.length > 0 ? gamesPlayedButton : ''}
       <ol>
         {users.map(user => (
           <User key={user.username} user={user} showGamesPlayed={showGamesPlayed} />
         ))}
       </ol>
     </div>

    )
  }
}
UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList
