import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../Contexts/CartContext';


const Navigation = props => {

const Nav = useContext(CartContext)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{Nav.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
