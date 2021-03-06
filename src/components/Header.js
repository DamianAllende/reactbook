import React, { Component } from 'react';

class Header extends Component{
	render(){
		return(
			<nav className='grid grid--justify header'>
		        <div className='grid'>
		          <img className='header__image' src='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg' />
		          <form>
		            <div className='form grid'>
		              <input type='text' placeholder='Search' />
		              <button>
		                <i className='fa fa-search'></i>
		              </button>
		            </div>
		          </form>
		        </div>
		        <div>
		        	<ul className='header__actions grid v-center'>
		        		<li>
			        		<a href='' className='grid v-center'>
			        			<img className='avatar' src='https://d3iw72m71ie81c.cloudfront.net/female-8.jpg'/>
			        			Dmn
		        			</a>
		        		</li>
		        		<li>
		        			<a href=''>
		        				<p>Home</p>
		        			</a>	
		        		</li>
		        	</ul>	
		        </div>
		      </nav>
		);
	}
}

export default Header;