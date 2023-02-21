import React from 'react';
import { useTodoDispatch, useTodoState } from '../context/TodoContext';

const TodoListsEdit = () => {
    const state = useTodoState(); // useContext => state리턴
    const dispatch = useTodoDispatch(); // useContext => dispatch리턴

    const onDelTodo = (id: number) => {
        dispatch({type: 'DELTODO', id});
    }
    const onToggleTodo = (id: number) => {
        dispatch({type: 'TOGGLETODO', id});
    }
    return (
        <div>
            <ul>
                {state.map(todo => <li key={todo.id} 
                    style={{color: todo.isDone ? 'lightsteelblue' : undefined}}>
                    <span onClick={() => onToggleTodo(todo.id)}>{todo.text}</span>
                    <button onClick={() => onDelTodo(todo.id)}>삭제</button>
                </li>)}
            </ul>
        </div>
    );
};

export default TodoListsEdit;