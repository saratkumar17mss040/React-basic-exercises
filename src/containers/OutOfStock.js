import React, { useState } from 'react';
import { Stocks } from '../assets';
import { RenderStockItems, RenderStockListItems } from '../components';

export function OutOfStock() {
    let [stockItems, setStock] = useState([]);
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
            stockItems = stockItems.concat([
                {
                    name: event.target.value,
                    quantity: 1,
                },
            ]);

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
                stockItems = stockItems.concat([
                    {
                        name: event.target.value,
                        quantity: 1,
                    },
                ]);
                setStock([...stockItems]);
            } else {
                isSameProduct = false;
            }
        }
    }

    return (
        <React.Fragment>
            <ul style={{ textAlign: 'center', paddingInlineStart: '0px' }}>
                <p>Products</p>
                <RenderStockListItems stocks={Stocks} addToStock={addToStock} />
            </ul>
            <div>
                <p>Stock</p>
                <div>
                    <div>
                        <RenderStockItems
                            stockItems={stockItems}
                            renderQuantityStatus={renderQuantityStatus}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
