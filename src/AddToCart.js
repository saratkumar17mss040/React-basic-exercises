import React, { useState } from 'react';
import { Items } from './Items';

// AddToCart can be made modular usig Arrays -
// include method instead by ourself looping
export function AddToCart() {
    const [cartItems, setCart] = useState([]);
    let isSameProduct = false;

    function addToCart(event) {
        if (cartItems.length === 0) {
            cartItems.push({
                product: event.target.value,
                quantity: 1,
            });
            setCart([...cartItems]);
        } else {
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].product === event.target.value) {
                    isSameProduct = true;
                    cartItems[i].quantity += 1;
                    setCart([...cartItems]);
                }
            }
            if (!isSameProduct) {
                cartItems.push({
                    product: event.target.value,
                    quantity: 1,
                });
                setCart([...cartItems]);
            } else {
                isSameProduct = false;
            }
        }
    }

    const renderCartItems = cartItems.map((item, index) => {
        return (
            <div
                style={{
                    border: '3px solid black',
                    width: '100px',
                    padding: '20px',
                    margin: '20px',
                }}
            >
                <li key={index} style={{ listStyle: 'none' }}>
                    {item.product}
                </li>
                <span>{item.quantity}</span>
            </div>
        );
    });

    const listItems = Items.map((item, index) => {
        return (
            <div
                style={{
                    border: '3px solid black',
                    width: '100px',
                    padding: '20px',
                    margin: '20px',
                }}
            >
                <li key={index} style={{ listStyle: 'none' }}>
                    {item.name}
                </li>
                <span>{item.price}</span>
                <button
                    value={item.name}
                    onClick={addToCart}
                    style={{ margin: '10px' }}
                    type="button"
                >
                    Add to cart 🛒
                </button>
            </div>
        );
    });

    return (
        <React.Fragment>
            <ul style={{ textAlign: 'center', paddingInlineStart: '0px' }}>
                <p>Products</p>
                {listItems}
            </ul>
            <div>
                <p>Cart</p>
                <div>
                    <div>{renderCartItems}</div>
                </div>
            </div>
        </React.Fragment>
    );
}
