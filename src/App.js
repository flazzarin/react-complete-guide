import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked!')
    // this.state.persons[0].name = 'Maximilian'; <---DON'T do this!!!
    this.setState( {
      persons: [
        { name: 'Maximum Carnage', age: 28 },
        { name: 'Manu', age: 29 },
        { name: "Stephanie", age: 26 }
      ] 
    } )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Some fake-people:</h1>
        </header>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <p>GAGARIN!</p>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'some text'));
  }
}

export default App;
