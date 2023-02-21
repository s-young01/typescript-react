import React from 'react';
import { dataType } from '../App';

interface todoProps {
    todos: dataType[],
    onDelTodo: (id: number) => void,
    onToggleTodo: (id: number) => void
}
const ToDoLists = ({todos, onDelTodo, onToggleTodo}: todoProps) => {
    return (
        <div>
            <ul>
                {todos.map(todo => <li key={todo.id} style={{color: todo.isDone ? 'lightsteelblue' : undefined}}>
                    <span onClick={() => onToggleTodo(todo.id)}>{todo.text}</span>
                    <button onClick={() => onDelTodo(todo.id)}>삭제</button>
                </li>)}
            </ul>
        </div>
    );
};

export default ToDoLists;