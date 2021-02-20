import { useState } from 'react';
import TodoList from './TodoList';

export default function Todo() {
    const [allTodo, setAllTodo] = useState([]);
    const [todo, setTodo] = useState('');

    function addTodo() {
        if (todo === '') return;
        setAllTodo([
            ...allTodo,
            {
                todo: todo,
                isSelected: false,
            },
        ]);
    }

    function strikeThrough(index) {
        let newAllTodo = allTodo.map((item, i) => {
            if (i === index) {
                return { todo: item.todo, isSelected: !item.isSelected };
            }
            return item;
        });
        setAllTodo(newAllTodo);
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
            <TodoList strikeThrough={strikeThrough} allTodo={allTodo} />
        </div>
    );
}
