import React from 'react';
import propTypes from 'prop-types';


class UserList extends React.Component {

  state = {

    showGamesPlayed : true,
  }

  toggleStateGame = () => {
    this.setState ( oldGameState => ({
      showGamesPlayed : !oldGameState.showGamesPlayed,
    }));
  }

  render () {

    return (
      const { showGamesPlayed } = this.state;
      const {users } = this.props ;

    )
  }

  UserList.propTypes = {
    users : propTypes.array.isRequired;
  }
}
export default UserList
