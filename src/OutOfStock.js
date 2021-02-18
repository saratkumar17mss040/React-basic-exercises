import React, { useState } from 'react';
import { Stocks } from './Stocks';

export function Stock() {
    const [stockItems, setStock] = useState([]);
    let isSameProduct = false;

    function renderQuantityStatus(name, quantity) {
        for (let i = 0; i < Stocks.length; i++) {
            if (Stocks[i].name === name && Stocks[i].quantity < quantity) {
                return <p style={{ color: 'Grey' }}>Out of stock</p>;
            }
        }
    }

    // AddToStock can be made modular usig Arrays -
    // include method instead by ourself looping
    function addToStock(event) {
        if (stockItems.length === 0) {
            stockItems.push({
                name: event.target.value,
                quantity: 1,
            });
            setStock([...stockItems]);
        } else {
            for (let i = 0; i < stockItems.length; i++) {
                if (stockItems[i].name === event.target.value) {
                    isSameProduct = true;
                    stockItems[i].quantity += 1;
                    setStock([...stockItems]);
                }
            }
            if (!isSameProduct) {
                stockItems.push({
                    name: event.target.value,
                    quantity: 1,
                });
                setStock([...stockItems]);
            } else {
                isSameProduct = false;
            }
        }
    }

    const renderCartItems = stockItems.map((item, index) => {
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
                {renderQuantityStatus(item.name, item.quantity)}
                <span>{item.quantity}</span>
            </div>
        );
    });

    const listItems = Stocks.map((item, index) => {
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
                    onClick={addToStock}
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
                <p>Stock</p>
                <div>
                    <div>{renderCartItems}</div>
                </div>
            </div>
        </React.Fragment>
    );
}
