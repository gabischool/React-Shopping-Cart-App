import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext } from './Contexts/ProductContext';
import CardContext from './Contexts/CartContext';






function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	

	const addItem = item => {
		if (!cart.find(cartItem => cartItem.id === item.id)) {
			setCart([...cart, item]);
	  }
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
		    <CardContext.Provider value = {cart} >
			<div className="App">
				<Navigation  />

				{/* Routes */}
				<Route exact path="/">
					<Products  />
						
				</Route>

				
				<Route path="/cart">
					<ShoppingCart  />
				</Route>
			</div>
			</CardContext.Provider>
		</ProductContext.Provider>
	);
}

		// this is my first commit 



export default App;
