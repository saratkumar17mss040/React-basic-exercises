import { useState } from 'react';

export function Todo() {
    const [allTodo, setAllTodo] = useState([]);
    const [todo, setTodo] = useState('');

    function addTodo() {
        if (todo === '') return;
        allTodo.push(todo);
        setAllTodo([...allTodo]);
    }

    return (
        <div>
            <h1>Todo 🗒</h1>
            <input
                type="text"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
            />
            <button type="button" onClick={addTodo}>
                Add
            </button>
            <ul>
                {allTodo.map((todo, index) => {
                    return <li key={index}>{todo}</li>;
                })}
            </ul>
        </div>
    );
}
