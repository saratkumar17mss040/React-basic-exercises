/* {
    /* {allTodo.map((todo) => {
                    <li>{todo}</li>;
                })} */
// }
// {
/* {allTodo} */
// }
// {
/* </ul> */
// }
// {
/* {allTodo.map((todo, index) => {
                    console.log(todo);
                    todo.isSelected ? (
                        <li
                            style={{ textDecoration: 'line-through' }}
                            onClick={() => strikeThrough(index)}
                            key={index}
                        >
                            {todo.todo}
                        </li>
                    ) : (
                        <li onClick={() => strikeThrough(index)} key={index}>
                            {todo.todo}
                        </li>
                    );
                })} */
// } */

// function strikeThrough(index) {
//     for (let i = 0; i < allTodo.length; i++) {
//         if (i === index) {
//             console.log(allTodo[i]);
//             allTodo[i].isSelected = !isSelected;
//             // setStrike(!isStriked);
//             setAllTodo([...allTodo]);
//         }
//     }
// }

function addTodo() {
    if (todo === '') return;
    // allTodo.push({
    //     todo: todo,
    //     isSelected: false,
    // });
    allTodo.push(todo);
    setAllTodo([...allTodo]);
    // setAllTodo([...allTodo].concat([todo]));
    // setAllTodo(
    //     [...allTodo].concat([
    //         {
    //             todo: todo,
    //             isSelected: false,
    //         },
    //     ]),
    // );
}

// function strikeThrough(index) {
//     for (let i = 0; i < allTodo.length; i++) {
//         if (i === index) {
//             console.log(allTodo[i]);
//             allTodo[i].isSelected = !isSelected;
//             // setStrike(!isStriked);
//             setAllTodo([...allTodo]);
//         }
//     }
// }

// cartItems.push({
//     product: event.target.value,
//     quantity: 1,
// });

// cartItems.push({
//     product: event.target.value,
//     quantity: 1,
// });
