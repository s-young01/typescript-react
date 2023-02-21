import React, { useRef, useState } from 'react';
import { dataType } from '../App';

interface InputProps {
    onAddTodo: (todo: dataType) => void
}
const InputTodo = ({onAddTodo}: InputProps) => {
    const [text, setText] = useState('');
    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const t = e.target.value;
        setText(t);
    }
    const todoid = useRef(2); // => 객체 리턴 { current: 2}
    const onClick = () => {
        onAddTodo({
            id: todoid.current,
            text: text,
            isDone: false
        });
        setText('');
        todoid.current++;
    }
    return (
        <div>
            <input name='tototext' onChange={onchange}/>
            <button onClick={onClick}>+</button>
        </div>
    );
};

export default InputTodo;