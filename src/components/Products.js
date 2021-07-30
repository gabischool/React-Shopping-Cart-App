import React, {useContext} from 'react';
import { ProductContext } from '../Contexts/ProductContext';


import Product from './Product';


const Products = props => {
	

	const Data = useContext(ProductContext)

  console.log("Data", Data )

	return (
		<div className="products-container">
			{Data.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={Data.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
