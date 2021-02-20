import React, { useState } from 'react';
import { Items } from './Items';
import RenderCartItems from './RenderCartItems';
import RenderListItems from './RenderListItems';

// AddToCart can be made modular usig Arrays -
// include method instead by ourself looping
export function AddToCart() {
    let [cartItems, setCart] = useState([]);
    let isSameProduct = false;

    function addToCart(event) {
        if (cartItems.length === 0) {
            cartItems = cartItems.concat([
                {
                    product: event.target.value,
                    quantity: 1,
                },
            ]);
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
                cartItems = cartItems.concat([
                    {
                        product: event.target.value,
                        quantity: 1,
                    },
                ]);
                setCart([...cartItems]);
            } else {
                isSameProduct = false;
            }
        }
    }

    return (
        <React.Fragment>
            <ul style={{ textAlign: 'center', paddingInlineStart: '0px' }}>
                <p>Products</p>
                <RenderListItems items={Items} addToCart={addToCart} />
            </ul>
            <div>
                <p>Cart</p>
                <div>
                    <div>
                        <RenderCartItems cartItems={cartItems} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
