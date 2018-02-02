import React, { Component } from 'react';
import './header.css';

const Header = ({shopDishes}) => {
	return (
		<div id='header'>
			<h1 className='logo sushi-logo'>
				<a href='#/'> </a>
			</h1>
			<a id='cart-info'>Shopping cart
				<span> 
					<span>{shopDishes.length}</span> items
				</span>
			</a>
		</div>
	)
}

export default Header;