import './styles.css';
// This is a named import - cannot name anything we want - we want to specfiy the name that we exported
// from the other file - we can export any other things we want from the file or we can export everything // /// from the file using eg- import * as MainComponents from "./MyComponent";
// use MainComponents.MyComponent and MainComponents.MyComponent2
import { PasswordChecker } from './PasswordChecker';
// This is a default import - can name the import name anything we want - only
// one default export from file
import Product from './Product';
import Counter from './Counter';
import AgeChecker from './AgeChecker';
import Post from './Post';
import ANPassword from './ANPassword';
import PCSubmit from './PCSubmit';
import SHPassword from './SHPassword';
import DesignTool from './DesignTool';
import AddToCart from './AddToCart';
import SwitchTabs from './SwitchTabs';
import ToastButton from './ToastButton';
import LikeButton from './LikeButton';
import ToggleMode from './ToggleMode';
import Stock from './OutOfStock';
import Todo from './Todo';

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
            <Stock />
            <h1>Exercise - 16</h1>
            <Todo />
        </div>
    );
}
