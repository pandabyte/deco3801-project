import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      isLoggedIn: false,
      userId: ""
    };
  }

  componentWillMount() {
    if (localStorage.getItem("token") && !this.state.isLoggedIn) {
      this.setState({isLoggedIn: true});
    }
    this._getUserId();
  }

  _loginButtonHandler() {
    var username = this.state.username;
    var password = this.state.password;
    // Clear username and password from state
    this.setState({username: '', password: ''})
    console.log(`Username: ${username} Password: ${password}`);
    console.log(JSON.stringify({username, password}));
    fetch('/api/auth/token/obtain/', {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         username,
         password
      })
    }).then((response) => {
      if (response.ok) {
        console.log('Success');
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          localStorage.setItem('token', data.access);
          this.setState({isLoggedIn: true});
          console.log('token set: ' + localStorage.getItem('token'));
          console.log('Now getting User ID');
          this._getUserId();
        });
      }
      throw new Error(response.status + ' ' + response.statusText);
    }).catch((error) => {
      console.log(error);
      this._logoutButtonHandler();
    });
  }

  _logoutButtonHandler() {
    localStorage.removeItem('token');
    this.setState({isLoggedIn: false, userId: ""});
    console.log("Token removed, state reset");
  }

  _getUserId() {
    var token = localStorage.getItem('token');
    fetch('/api/v1/userid/', {
      method: 'GET', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    }).then((response) => {
      if (response.ok) {
        console.log('Success');
        console.log(response);
        return response.json().then((data) => {
          console.log(data);
          this.setState({userId: data.userId});
        });
      } 
      throw new Error(response.status + ' ' + response.statusText);
    }).catch((error) => {
      console.log(error);
      this._logoutButtonHandler();
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  
  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="App">
          <p>You are logged in</p>
          <p>UserID: {this.state.userId}</p>
          <button type="button" onClick={this._logoutButtonHandler.bind(this)}>logout</button>
        </div>
      );
    } else {
      return (
        <div className="App">
          <label>
            Username:
            <input name="username" type="text" onChange={this.handleChange.bind(this)} />
          </label>
          <label>
            Password:
            <input name="password" type="password" onChange={this.handleChange.bind(this)} />
          </label>
          <p>UserID: {this.state.userId}</p>
          <button type="button" onClick={this._loginButtonHandler.bind(this)}>login</button>
          <button type="button" onClick={this._getUserId.bind(this)}>I want to get user_id without token</button>
        </div>
      )
    }
  }
}

export default App;
