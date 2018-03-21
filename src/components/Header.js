import React, { Component } from 'react';


class Header extends Component{
	render(){
		return(
			<nav className='grid grid--judtify'>
				<div>
					<img className='header__image' src="https://www.inria.fr/extension/site_inria/design/site_inria/images/social_networks/facebook_square.png" / >
					<form>
						<div className='form'>
							<input type='text' placeholder='Search'/>
							<button>
								<i className='fa fa-search'></i>
							</button>
						</div>
					</form>
				</div>
				<div></div>
			</nav>
		);
	}
}

export default Header;