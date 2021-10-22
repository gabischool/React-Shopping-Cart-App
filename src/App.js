import React, { useState} from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Style 
import './sass/index.scss'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
//context 
import { ProductContext } from './contexts/ProductContext';
import { CartContext} from './contexts/CartContext';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	console.log(!cart);

	const addItem = item => {
		// add the given item to the cart
		if(!cart.find(cardItem => cardItem.id === item.id)){
			setCart([...cart, item])
		}
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={cart}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
