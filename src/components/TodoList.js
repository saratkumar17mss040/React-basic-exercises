export default function TodoList({ allTodo, strikeThrough }) {
    return (
        <ul>
            {allTodo.map((todo, index) => {
                return (
                    <li
                        style={
                            todo.isSelected
                                ? { textDecoration: 'line-through' }
                                : {}
                        }
                        onClick={() => strikeThrough(index)}
                        key={index}
                    >
                        {todo.todo}
                    </li>
                );
            })}
        </ul>
    );
}
