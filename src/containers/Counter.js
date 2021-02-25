import { useState } from 'react';

export function Counter() {
    let [count, setCount] = useState(0);

    function incrementCounter() {
        setCount(++count);
    }

    function decrementCounter() {
        setCount((count) => count - 1);
    }

    return (
        <div>
            <h2>Simple Counter</h2>
            <div>
                <p style={count < 0 ? { color: 'red' } : {}}>{count}</p>
                {/* Simple counter functions can be made inline */}
                <button onClick={incrementCounter}>+</button> &nbsp;
                <button onClick={decrementCounter}>-</button>
            </div>
        </div>
    );
}
