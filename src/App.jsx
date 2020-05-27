import React, { Component } from 'react';
import './App.css';

import CelebrityInfo from './components/CelebrityInfo';

import contacts from './contacts.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [...contacts].slice(0,5)
    };
  }

  randomCelebrity = () => {
    const copyContacts = [...contacts];
    let randomContact = copyContacts[Math.floor(Math.random() * copyContacts.length)];
    this.setState({
      contacts: [...this.state.contacts, randomContact]
    })
  }  

  sortByName = () => {
    const copyContacts = [...this.state.contacts];
    copyContacts.sort((a, b) => a.name > b.name ? 1 : -1);
    this.setState({
      contacts: [...copyContacts]
    })
  };

  sortByPopularity = () => {
    const copyContacts = [...this.state.contacts];
    copyContacts.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
    this.setState({
      contacts: [...copyContacts]
    })
  };

  deleteCelebrity = (celebrityindex) => {
    const copyContacts = [...this.state.contacts];
    copyContacts.splice(celebrityindex, 1)
    this.setState({
      contacts: copyContacts
    })
  }

  render() {
    
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.randomCelebrity}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((celebrity, index) => {
              return <CelebrityInfo key={index} {...celebrity} clickToDelete={() => this.deleteCelebrity(index)}/> 
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
