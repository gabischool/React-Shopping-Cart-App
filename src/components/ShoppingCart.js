
import CartContext from '../Contexts/CartContext';
import React, { useContext }from 'react';    
import Item from './ShoppingCartItem';



const ShoppingCart = props => {

	const cartItem = useContext(CartContext)

	const getCartTotal = () => {
		return cartItem.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};


	

	return (


		<div className="shopping-cart">
			{cartItem.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
