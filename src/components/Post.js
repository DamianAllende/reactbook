import React, { Component } from 'react';

class Post extends Component{
	render(){
		return (
			<div className="post">
				<header className='post__header'>
					<div>
						<img className='post__image' src='https://scontent.fmex11-1.fna.fbcdn.net/v/t1.0-1/p100x100/26904508_10156429668511323_5866309676974531495_n.png?oh=0860b50dc03a86826bc8c2b0d4af61c7&oe=5B28EA9A' />
					</div>
					<div>
						<h3 className="post__title">The Guardian</h3>
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

export default Post