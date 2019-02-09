import React, { Component } from 'react';

import './App.css';
import  SearchBar from './SearchBar'
import  AddressList from './AddressList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(faGlobe)
class App extends Component {
  state = {
    addresses:[]
  }
  handleOnResult = (resultValues) => {
    this.setState({addresses: resultValues});
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <FontAwesomeIcon icon="globe" />
        <p>Search for an address</p>
        <SearchBar onResult={this.handleOnResult}/>
        </header>
        <AddressList  addressList={this.state.addresses}/>
       
              
      </div>

    );
  }
}

export default App;
