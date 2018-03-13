import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOuput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: 'Ribsy' },
      { username: 'Bezus' }
    ]
  }

  clickNameChangeHandler = (newName) => {
    this.setState({
      users: [
        { username: 'Ribsy' },
        { username: newName }
      ]
    })
  }

  userNameChangeHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: 'Bezus' }
      ]
    })
  }

  render() {
    const containerStyle = {
      width: '85%',
      margin: '20px auto',
      border: '2px solid lightgrey'
    }

    return (
      <div className="App" >
        <UserInput changed={this.userNameChangeHandler}
          username={this.state.users[0].username} />
        <div style={containerStyle}>
          <UserOuput username={this.state.users[0].username} />
          <UserOuput
            click={this.clickNameChangeHandler.bind(this, 'Elizabeth')}
            changed={this.userNameChangeHandler}
            username={this.state.users[1].username} />
          <UserOuput username={this.state.users[0].username} />
          <UserOuput
            click={this.clickNameChangeHandler.bind(this, 'Elizabeth')}
            changed={this.userNameChangeHandler}
            username={this.state.users[1].username} />
        </div>
      </div >
    );
  }
}

export default App;
