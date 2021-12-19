import React, { useState,useEffect} from 'react';
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
	let [products] = useState(data);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		getToLocalStorage();
	}, [])
	
	useEffect(() => {
		saveToLocalStorage();
	}, [cart])

	const saveToLocalStorage = () => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}

	const getToLocalStorage = () => {
		if(localStorage.getItem('cart') == null){
			localStorage.setItem('cart', JSON.stringify([]))
		} 
		else{
			let localDate = JSON.parse(localStorage.getItem('cart'))
			if(localDate && addItem){
				setCart(localDate)
			}
		
		}
	}

	const addItem = item => {
		// add the given item to the cart
		if(!cart.find(cardItem => cardItem.id === item.id)){
			setCart([...cart, item])
		}
	};

	const removeItem = item => {
		let remove= cart.slice();
		remove = remove.filter(i => i.id !== item.id )
		setCart(remove)
	};


	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem ,removeItem }}>
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
