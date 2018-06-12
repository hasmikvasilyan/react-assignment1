import React, { Component } from 'react';
import './App.css';
import {UserOutput} from './User/User';
import {UserInput} from './User/User';

class App extends Component {
    state={
        username:['Hasmik','Tatev']
    }
    usernameChangeHandler=(event)=> {
        this.setState({
            username:[event.target.value, 'Tatev']
        })
    }

  render (){
        const style={
            border: '1px solid #ececec',
            borderRadius: '3px',
            boxShadow: '0 0 2px 1px rgba(0,0,0,0.1)',
            padding: '3px 10px',

        }
    return (
      <div className="App">
        <div className="container">
            <UserOutput username={this.state.username[0]}/>
            <UserInput  username={this.state.username[0]}
                        change={this.usernameChangeHandler}
                        style={style}/>
        </div>
        <div className="container">
            <UserOutput username={this.state.username[1]}/>
            <UserInput username={this.state.username[1]}
                       style={style}/>
        </div>
      </div>
    );
  }
}

export default App;
