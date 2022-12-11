import React, { useEffect, useState } from 'react';
import { addToDb, getFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const shoppingCart = getFromDb();
        const allLocalData = [];
        for(const id in shoppingCart){
            const resultProduct = products.find(product => product.id === id);
            if(resultProduct){
                resultProduct.quantity = shoppingCart[id];
                allLocalData.push(resultProduct);
            }
        }
        setCart(allLocalData);
    },[products])
    
    const clickProduct = (product)=>{
        let newCart = [];
        const exist = cart.find(cartProduct => cartProduct.id === product.id);
        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            const rest = cart.filter(cartProduct => cartProduct.id !== product.id);
            product.quantity += 1;
            newCart = [...rest, product];
        }
        
        setCart(newCart);
        addToDb(product.id);
    }
   
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key = {product.id}
                    product = {product}
                    clickProduct={clickProduct}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                cart = {cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;