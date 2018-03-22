import React, { Component } from 'react';
import Post from './components/Post';
import Header from './components/Header';
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
	    	{this.state.data.map(function(p){
	    		return <Post 
	    		name={p.name}
	    		avatar={p.picture.thumbnail}
	    		/>
	    	})}
	    </div>	
    );
  }
}

export default App;
