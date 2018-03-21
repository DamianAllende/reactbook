import React, { Component } from 'react';


class Header extends Component{
	render(){
		return(
			<section>
				<div className='head'>
					<div className='head__logo'>
						<i className='fa fa-facebook-square'></i>
					</div>
					<div className='head__search'>
						<input className='head__search__input' type="" name=""/>
					</div>
				</div>
			</section>
		);
	}
}

export default Header;