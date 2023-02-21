import React, { useRef, useState } from 'react';
import { useTodoDispatch } from '../context/TodoContext';

const TodoInput = () => {
    // input 값 관리 상태 생성
    const [text, setText] = useState('');
    const dispatch = useTodoDispatch(); // useContext => dispatch 리턴
    // input 값 변경될 때 호출되는 함수
    // text 값을 input의 값으로 업데이트
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const t = e.target.value;
        setText(t);
    }
    const todoid = useRef(2);
    const onAddTodo = () => {
        dispatch({type: 'ADDTODO', todo: {
            id: todoid.current,
            text: text,
            isDone: false
        }});
        setText(''); // input 상태 초기화
        todoid.current++; // id값 1씩 올라감
    }
    return (
        <div>
            <input name='text' onChange={onChange}/>
            <button onClick={onAddTodo}>+</button>
        </div>
    );
};

export default TodoInput;