import React, { Component } from 'react';

class Post extends Component{
	render(){
		const {name, avatar} = this.props;
		return (
			<div className="post">
				<header className='post__header'>
					<div>
						<img className='post__image' src={ avatar } />
					</div>
					<div>
						<h3 className="post__title">{ name.first } { name.last }</h3>
						<p><time>1 hr</time> · <i className="fa fa-globe"></i></p>
					</div>
				</header>
				<div className="post__content">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
				</div>
				<footer>
					<ul className="post__actions">
						<li className=""><a href=""><i className='fa fa-thumbs-up'></i>Me Gusta</a></li>
						<li className=""><a href=""><i className='fa fa-comment-o'></i>Comentarios</a></li>
						<li className=""><a href=""><i className='fa fa-share'></i>Compartir</a></li>
					</ul>
				</footer>
			</div>
		);
	}	
}

export default Post;