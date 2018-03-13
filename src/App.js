import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOuput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { userName: 'Ribsy' },
      { userName: 'Bezus' }
    ]
  }

  clickNameChangeHandler = (newName) => {
    this.setState({
      users: [
        { userName: 'Ribsy' },
        { userName: newName }
      ]
    })
  }

  userNameChangeHandler = (event) => {
    this.setState({
      users: [
        { userName: event.target.value },
        { userName: 'Bezus' }
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
          currentUserName={this.state.users[0].userName} />
        <div style={containerStyle}>
          <UserOuput userName={this.state.users[0].userName} />
          <UserOuput
            click={this.clickNameChangeHandler.bind(this, 'Elizabeth')}
            changed={this.userNameChangeHandler}
            userName={this.state.users[1].userName} />
          <UserOuput userName={this.state.users[0].userName} />
          <UserOuput
            click={this.clickNameChangeHandler.bind(this, 'Elizabeth')}
            changed={this.userNameChangeHandler}
            userName={this.state.users[1].userName} />
        </div>
      </div >
    );
  }
}

export default App;
