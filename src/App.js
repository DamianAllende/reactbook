import React, { Component } from 'react';
import Post from './components/Post';
import Header from './components/Header';
import './App.css';

import Twit from 'twit';

import Config from './config'

class App extends Component {
  render() {
  	console.log(Config)
    return (
    	<div>
	    	<Header />	
	    	<Post />
	    </div>	
    );
  }
}

export default App;
