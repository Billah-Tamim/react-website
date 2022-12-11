import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function Product(props) {
    const { name, img, seller, price, ratings } = props.product;
    const {clickProduct} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <p className='seller'><small>Manufacturer: {seller}</small></p>
                <p><small>Ratting: {ratings} stars</small></p>
            </div>
            <button onClick={()=>clickProduct(props.product)} className='product-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
}

export default Product;