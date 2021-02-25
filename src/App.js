import React from 'react';
import { Product } from './components';
import {
    AddToCart,
    AgeChecker,
    ANPassword,
    OutOfStock,
    PasswordChecker,
    Counter,
    DesignTool,
    LikeButton,
    PCSubmit,
    Post,
    SHPassword,
    SwitchTabs,
    ToastButton,
    Todo,
    ToggleMode,
} from './containers';
import './styles.css';

export default function App() {
    return (
        <div className="App">
            <h1>Exercise - 1</h1>
            <Product
                name="HERE & NOW"
                type="Men Printed Round Neck T-shirt"
                currentPrice="$400"
                originalPrice="$700"
                discountOffer="(45% OFF)"
            />
            <h1>Exercise - 2</h1>
            <Counter />
            <h1>Exercise - 3</h1>
            <AgeChecker />
            <h1>Exercise - 4</h1>
            <PasswordChecker />
            <h1>Exercise - 5</h1>
            <Post />
            <h1>Exercise - 6</h1>
            <ANPassword />
            <h1>Exercise - 7</h1>
            <PCSubmit />
            <h1>Exercise - 8</h1>
            <SHPassword />
            <h1>Exercise - 9</h1>
            <DesignTool />
            <h1>Exercise - 10</h1>
            <AddToCart />
            <h1>Exercise - 11</h1>
            <SwitchTabs />
            <h1>Exercise - 12</h1>
            <ToastButton />
            <h1>Exercise - 13</h1>
            <LikeButton />
            <h1>Exercise - 14</h1>
            <ToggleMode />
            <h1>Exercise - 15</h1>
            <OutOfStock />
            <h1>Exercise - 16</h1>
            <Todo />
        </div>
    );
}
