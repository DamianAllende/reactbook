import React, { Component } from 'react';
import { Switch, Router } from 'react-router-dom';
import Post from './components/Post';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

import Twit from 'twit';

import config from './config'

import request  from 'superagent'

const T = new Twit(config)

class App extends Component {
	constructor(){
  		super()

  		this.state={
  			data: []
  		}

  	}


  componentDidMount(){
  	request
  		.get('https://randomuser.me/api/?results=20')
  		.then(data =>{
  			console.log(data)
  			this.setState({
  				data: data.body.results
  			})
  		})
  }
  render() {


  	
  	
    return (
    	<div>
	    	<Header />	
	    	<Home />
	    </div>	
    );
  }
}

export default App;
