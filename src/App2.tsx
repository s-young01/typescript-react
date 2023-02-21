import React from 'react';
import TodoInput from './components/TodoInput';
import TodoListsEdit from './components/TodoListsEdit';
import TodoContext from './context/TodoContext';

const App2 = () => {
    return (
        <div>
            <TodoContext>
                <TodoInput/>
                <TodoListsEdit/>
            </TodoContext>
        </div>
    );
};

export default App2;