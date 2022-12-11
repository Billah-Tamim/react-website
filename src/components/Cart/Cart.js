import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let price =0;
    let shipping =0;
    let quantity = 0;
    for(const item of cart){
        quantity += item.quantity;
        price = price+item.price * item.quantity;
        shipping += item.shipping;
        
    }
    const tax = price * 0.1;
    const grandTotal = price +shipping + tax;
    return (
        <div className='cart'>
            <h4 style={{textAlign:'center'}}>Ordered Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: $ {shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;